import DivType from "./divType";

export default function DivCard({ poke }) {
    return (
        <a href={"/pokedex/pokemon/" + poke.id}
            style={{
                width: "180px",

                backgroundColor: "#f5f5f5",
                border: "2px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
            }}
        >
            {/* Imagem */}
            <img
                src={poke.sprites.front_default}
                alt={poke.name}
                style={{ width: "96px", height: "96px" }}
            />

            {/* Nome */}
            <h3 style={{ textTransform: "capitalize", margin: "10px 0" }}>
                {poke.name}
            </h3>

            {/* Tipos */}
            <div>
                {poke.types.map((t) => (
                    <DivType key={t.type.name} type={t.type.name} />
                ))}
            </div>
        </a>
    );
}
