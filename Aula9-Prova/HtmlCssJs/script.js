var Passo = 1;
var Valores = [];
function PassoAtual() {
    var val = Number(document.getElementById("userValue").value);
    
    if(!(val > 0 || val <= 0))
    {
        alert("Digite um número");
        return;
    }

    switch (Passo) {
        case 0:
            Valores.push(val);
            Passo++;

            LimpaResultado();

            AlterText("textoAtual","Digite o 1º número");
            AlterText("numPasso","1");

            break;
        case 1:
            Valores.push(val);
            Passo++;

            AlterText("textoAtual","Digite o 2º número");
            AlterText("numPasso","2");
            break;
        case 2:
            Valores.push(val);
            Passo++;

            AlterText("textoAtual","Digite o 3º número");
            AlterText("numPasso","3");
            break;
        case 3:
            Valores.push(val);
            Passo = 0;

            Resultado(Valores);

            AlterText("textoAtual","RESULTADOS");
            AlterText("numPasso",">:D");
            break;
        default:
            alert("Erro no passo");
            break;
    }
}

function AlterText(idDiv, text) {
    var textoAtual = document.getElementById(idDiv);
    textoAtual.setHTMLUnsafe(text);
}


function Resultado(Valores){
    var maior = Valores[0];
    var menor = Valores[0];
    var media = 0;

    Valores.forEach(element => {
        if(element > maior)
            maior = element;

        if(element < menor)
            menor = element;

        media += element;
    });

    media = media / Valores.length;

    const Result = document.getElementById("result")

    Result.setHTMLUnsafe(`
        <ul>
            <li>Maior: ${maior}</li>
            <li>Menor: ${menor}</li>
            <li>Média: ${media}</li>
        </ul>
        <br>
        <button onclick="PassoAtual()">Resetar</button>
    `);

    const some = document.getElementById("center");
    some.classList.add("none");
}


function LimpaResultado(){
    const Result = document.getElementById("result");
    Result.setHTMLUnsafe("");

    const some = document.getElementById("center");
    some.classList.remove("none");
}