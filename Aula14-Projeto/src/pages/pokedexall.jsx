import { useState, useEffect, useRef } from "react";
import axios from "axios";
import DivCard from "../components/divCard";

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 5;

    const loader = useRef(null); // var que observa se chegou ao fim, fica de cuido

    const fetchPokemons = async () => {
        if (loading) return; 

        setLoading(true);
        const offset = page * limit;

        try {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            );

            const details = await Promise.all(
                res.data.results.map(async (p) => {
                    const pokeRes = await axios.get(p.url);
                    return pokeRes.data;
                })
            );

            // adiciona ao array de pokemon na tela
            console.log(details);
            // setPokemons((prev) => [...prev, ...details]);

            setPokemons((prev) => {
                const all = [...prev, ...details];
                const unique = all.filter(
                  (p, index, self) => index === self.findIndex((x) => x.id === p.id)
                );
                return unique;
            });

        } catch (err) {
            console.error("Erro ao carregar pokémons:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    // verifica se o user chegou ao fim dapage
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 0.5 }
        );

        if (loader.current) observer.observe(loader.current);
        return () => observer.disconnect();
    }, [loading]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Pokédex</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: "15px",
                    marginTop: "20px",
                }}
            >
                {pokemons.map((poke) => (
                    <DivCard key={poke.id} poke={poke} />
                ))}
            </div>

            {/* Loader sentinel */}
            <div ref={loader} style={{ height: "60px" }}>
                {loading && <p>Carregando mais Pokémon...</p>}
            </div>
        </div>
    );
}
