export default function divType({type}) {
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

    const colors = colortypes[type] || { corclara: "#999", corforte: "#555" };

    return (
        <>
            <div
                style={{
                backgroundColor: colors.corclara,
                border: `2px solid ${colors.corforte}`,
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