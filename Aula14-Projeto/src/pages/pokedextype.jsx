import { useState, useEffect } from 'react'
import axios from "axios";
import DivType from "../components/divType";

export default function Pokedex() {
    const [allTypes, setAllTypes] = useState([]);

    useEffect(() => {
        getAllTypes();
    }, []);

    const getAllTypes = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/type');
            console.log(response.data.results);
            setAllTypes(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar tipos:", error);
        }
    };

    return (
        <>
            <h1>All</h1>
            <a href="pokedex/type/all">
                <DivType type="all" />
            </a>

            <h1>Types</h1>
            <div style={{ padding: "10px" }}>
                {allTypes.map((type) => (
                    <a href={`pokedex/type/${type.name}`} key={type.name}>
                        <DivType type={type.name} />
                    </a>
                ))}
            </div>
        </>
    );
}
