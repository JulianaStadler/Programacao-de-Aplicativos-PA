const nome = "Juliana";
let meninas = ["Thayna", "Joyce", "Leticia"]

console.log("O nome é " + nome);

console.log("Meninas: " + meninas[0]);

const objeto = {
    nome: "Helo",
    idade: 17,
    trabalho: "Bosch",
    familia: {
        pai: "Jorge",
        mae: "helo mae"
    }
}

console.log(objeto);
console.log(objeto.nome);
console.log(objeto.familia.pai);

function Soma(a, b) {
    return a + b;
}

const SomaAnonima = function (a, b) {
    return a + b;
}

const SomaFlecha = (a, b) => a + b;


let opa1 = document.getElementById("divando") //retorna a div
let opa2 = document.getElementById("divando").innerHTML //retorna o texto da div

console.log(opa1)
console.log("texto anterior: "+ opa1.innerHTML)
opa1.innerText = "Alterado"
console.log("texto atual: "+ opa1.innerHTML)


let entrada = document.getElementById("input").innerHTML
let botao = document.getElementById("button")
let quadrado = document.getElementById("quadrado")

setTimeout(() => {
    quadrado.classList.remove("ok")
    quadrado.classList.add("bad")
}, 1000);


let env = document.getElementById("button").addEventListener("click", () => {
    console.log(document.getElementById("input").value)
    quadrado.style.background = document.getElementById("input").value
})
