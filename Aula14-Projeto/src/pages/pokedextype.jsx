import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DivCard from "../components/divCard";

export default function PokedexType() {
    const { type } = useParams();
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 15;

    const loader = useRef(null);

    useEffect(() => {
        const fetchTypePokemons = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
                const list = res.data.pokemon.map(p => p.pokemon); // extrai {name, url}
                setAllPokemons(list);
                setPage(0); // resetar pagina ao mudar de tipo
                setPokemons([]); // limpa os Pokémon carregados
            } catch (err) {
                console.error("Erro ao carregar pokémons:", err);
            }
        };
        fetchTypePokemons();
    }, [type]);


    useEffect(() => {
        const fetchPokemons = async () => {
            if (loading) return;

            setLoading(true);
            const start = page * limit;
            const end = start + limit;

            const listatual = allPokemons.slice(start, end);

            try {
                const details = await Promise.all(
                    listatual.map(async (p) => {
                        const pokeRes = await axios.get(p.url);
                        return pokeRes.data;
                    })
                );

                setPokemons(prev => {
                    const all = [...prev, ...details];
                    const unique = all.filter(
                        (p, index, self) => index === self.findIndex(x => x.id === p.id)
                    );
                    return unique;
                });
            } catch (err) {
                console.error("Erro ao carregar pokémons:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [page, allPokemons]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.5 }
        );

        if (loader.current) observer.observe(loader.current);
        return () => observer.disconnect();
    }, [loading]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Pokédex {type}</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "15px",
                    marginTop: "20px",
                }}
            >
                {pokemons.map(poke => (
                    <DivCard key={poke.id} poke={poke} />
                ))}
            </div>

            <div ref={loader} style={{ height: "60px" }}>
                {loading && <p>Carregando mais Pokémon...</p>}
            </div>
        </div>
    );
}
