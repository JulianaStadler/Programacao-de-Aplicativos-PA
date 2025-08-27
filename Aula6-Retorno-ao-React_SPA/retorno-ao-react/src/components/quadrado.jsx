export function Quadrado({cor}){
    return(
        <div
            className="quadrado"
            style={{
                background: cor,
                width: "100px",
                height: "100px",
                border: "2px solid black",
                borderRadius: "8px",
                margin: "10px 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                float: "left",
                color: "#fff"
            }}
        >
            QUADRADO
        </div>
    )
}