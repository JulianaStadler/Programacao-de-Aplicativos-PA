import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import DivType from "../components/divType";
import { useState, useEffect } from 'react'
import axios from "axios";

export default function PokedexPokemon() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async () => {
        const pokemoninfos = await axios.get('https://pokeapi.co/api/v2/pokemon/'+id);
        setPokemon(pokemoninfos.data)
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

    return (
        <>
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
                    <DivType type={poketype.type.name}/>
                ))}
            </div>

        </>
    )
}