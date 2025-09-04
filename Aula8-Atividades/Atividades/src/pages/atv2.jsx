import { useEffect, useState } from "react";

export default function Atv2() {

    const [hora, setHora] = useState(new Date().getHours());
    const [minuto, setMinuto] = useState(new Date().getMinutes());
    const [segundo, setSegundo] = useState(new Date().getSeconds());
    const [mili, setMili] = useState(new Date().getMilliseconds());
    const [comecou, setIniciar] = useState(false);
    const [kabum, setKabum] = useState(false);
    
    useEffect(() => {
        setIniciar(kabum == true ? false : true)
        

    }, [comecou]);
    
    function tempoAteExplodir(){
        const timer = setInterval(() => {
            const agora = new Date();
            setHora(agora.getHours());
            setMinuto(agora.getMinutes());
            setSegundo(agora.getSeconds());
            setMili(agora.getMilliseconds());
        }, 1);
        return () => clearInterval(timer);
    }

    return (
        <>
        <h1>2. Temporizador regressivo</h1>
        <p>
            <li>Input para o usuário digitar um número (em segundos).</li>
            <li>Botão Iniciar começa a contagem regressiva.</li>
            <li>Quando chegar em 0, exibir “⏰ Tempo esgotado!”.</li>
        </p>
        <br /><hr /><br />
        <input type="number" name="" id="" placeholder="Seconds"/>
        <button onClick={() => setIniciar(true)}>Começar</button>


        {comecou &&
            <div style={{background: "black", width: "fit-content", margin: "0 auto", padding: "5px 10px", borderRadius: "5px", color: "red", border: "5px solid red", boxShadow: "inset #393939 0px 0px 11px 4px, #393939 0px 0px 7px 2px"}}>
                {String(hora).padStart(2, "0")}
                <span style={{color: "white"}}> : </span>{String(minuto).padStart(2, "0")}
                <span style={{color: "white"}}> : </span>{String(segundo).padStart(2, "0")}
                <span style={{color: "white"}}> : </span>{String(mili).slice(0, 1).padStart(2, "0")}
            </div>
        }
        {kabum &&
            <div>KABUM!!!!!!</div>
        }

        </>
    );
}