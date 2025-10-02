import { useState, useEffect } from "react";
import axios from "axios";
import DivCard from "../components/divCard";

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0); // 0 = primeira página
    const limit = 20;

    // Buscar pokémons da página atual
    const fetchPokemons = async () => {
        try {
            const offset = page * limit;
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            );

            // Cada resultado só tem "name" e "url"
            // Precisamos buscar detalhes de cada Pokémon
            const details = await Promise.all(
                res.data.results.map(async (p) => {
                    const pokeRes = await axios.get(p.url);
                    return pokeRes.data; // já vem com name, sprites, types etc
                })
            );

            setPokemons(details);
        } catch (err) {
            console.error("Erro ao carregar pokémons:", err);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Pokédex</h1>
            {/* Paginação */}
            <div style={{ marginTop: "20px" }}>
                <button
                    disabled={page === 0}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    style={{
                        marginRight: "10px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: page === 0 ? "not-allowed" : "pointer",
                    }}
                >
                    ← Anterior
                </button>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Próximo →
                </button>
            </div>

            {/* Grid de Cards */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "20px",
                    margin: "50px 0"
                }}
            >
                {pokemons.map((poke) => (
                    <DivCard key={poke.id} poke={poke} />
                ))}
            </div>

            {/* Paginação */}
            <div style={{ marginTop: "20px" }}>
                <button
                    disabled={page === 0}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    style={{
                        marginRight: "10px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: page === 0 ? "not-allowed" : "pointer",
                    }}
                >
                    ← Anterior
                </button>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Próximo →
                </button>
            </div>
        </div>
    );
}
