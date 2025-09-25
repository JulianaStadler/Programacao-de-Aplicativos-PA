import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async () => {
        const pokelist = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        console.log(pokelist.data.count)

        //gera um valor aleatorio entre 0 e data.count - 1
        var indice = Math.floor(Math.random() * pokelist.data.count);
        console.log(indice) //int

        const pokealeatorio = await axios.get(pokelist.data.results[indice].url);

        console.log(pokealeatorio.data)

        setPokemon(pokealeatorio.data)
    }

    const spriteKeys = [
        "front_default",
        "back_default",
        "front_shiny",
        "back_shiny",
        "front_female",
        "back_female",
        "front_shiny_female",
        "back_shiny_female"
    ];

    const geraDivType = (type) => {
        const colortypes = {
            normal: { corclara: "#A8A878", corforte: "#6D6D4E" },
            fire: { corclara: "#F08030", corforte: "#9C531F" },
            water: { corclara: "#6890F0", corforte: "#445E9C" },
            electric: { corclara: "#F8D030", corforte: "#A1871F" },
            grass: { corclara: "#78C850", corforte: "#4E8234" },
            ice: { corclara: "#98D8D8", corforte: "#638D8D" },
            fighting: { corclara: "#C03028", corforte: "#7D1F1A" },
            poison: { corclara: "#A040A0", corforte: "#682A68" },
            ground: { corclara: "#E0C068", corforte: "#927D44" },
            flying: { corclara: "#A890F0", corforte: "#6D5E9C" },
            psychic: { corclara: "#F85888", corforte: "#A13959" },
            bug: { corclara: "#A8B820", corforte: "#6D7815" },
            rock: { corclara: "#B8A038", corforte: "#786824" },
            ghost: { corclara: "#705898", corforte: "#493963" },
            dragon: { corclara: "#7038F8", corforte: "#4924A1" },
            dark: { corclara: "#705848", corforte: "#49392F" },
            steel: { corclara: "#B8B8D0", corforte: "#787887" },
            fairy: { corclara: "#EE99AC", corforte: "#9B6470" }
        };

        return (
            <>
                <div
                    style={{
                        backgroundColor: colortypes[type].corclara,
                        border: `2px solid ${colortypes[type].corforte}`,
                        padding: "5px 10px",
                        borderRadius: "8px",
                        marginRight: "5px",
                        display: "inline-block",
                        color: "#fff",
                        fontWeight: "bold"
                    }}>
                    {type.toUpperCase()}
                </div>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={() => { getPokemon(); }} style={{ position: 'absolute', top: "80px", transform: "translate(-50%, 0)", background: "green" }}>New Pokemon</button> <br /> <br />

            <h3>{pokemon.name}</h3>
            <br /><hr /><br />
            <div style={{
                width: "100%",
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: "10px"
            }}>
                {spriteKeys.map((key) =>
                    pokemon.sprites?.[key] ? (
                        <img key={key} src={pokemon.sprites[key]} alt={key} style={{ width: "35%" }} />
                    ) : null
                )}
            </div>


            <br /><hr /><br />

            <h3>ID: {pokemon.id}</h3>
            <h3>Altura: {pokemon.height}</h3>
            <h3>Type: {pokemon.type}</h3>


            <div style={{
                padding: "10px"
            }}>
                {pokemon.types?.map((poketype) => (
                    geraDivType(poketype.type.name)
                ))}
            </div>

        </>
    )
}