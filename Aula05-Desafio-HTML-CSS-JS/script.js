var atual = 1;

let novo = document.getElementById("button").addEventListener("click", () => {
    let text = document.getElementById("newtodo").value
    if(text == ""){
        msg("error", "Item vazio");
        return;
    }
    
    let listtodo = document.getElementById("list-todo")
    console.log(listtodo);
    
    let todos = listtodo.querySelectorAll(".todo")
    for (const element of todos) {
        if (element.querySelector(".t").innerHTML === text) {
            msg("error", "Esse item já existe");
            return;
        }
    }


    const newtodo = document.createElement('div');
    newtodo.innerHTML = `
            <input type="checkbox" class="check" name="" id="todo${atual}" onclick="contagem()">
            <label for="todo${atual}" class="t" onclick="contagem()">${text}</label>
    `;
    newtodo.classList.add("todo")
    listtodo.appendChild(newtodo);
    msg("ok", "")
    atual++;
    contagem()

})

function msg (type, text){
    let msg = document.getElementById(type)
    console.log(msg)

    
    setTimeout(() => {
        if(text != ""){
            msg.textContent = `Erro: ${text}`
        }
        msg.style.opacity = "1"
        msg.classList.add("visible")

    }, 0);

    setTimeout(() => {
        msg.style.opacity = "0"
    }, 5000);
    msg.classList.remove("visible");
    
}

function contagem() {
    let feitos = 0;
    let afazer = 0;

    let listtodo = document.getElementById("list-todo")
    console.log(listtodo);
    
    let todos = listtodo.querySelectorAll(".todo")
    for (const element of todos) {
        console.log(element.querySelector(".check"))
        console.log(element.querySelector(".check").checked)

        if (element.querySelector(".check").checked) {
            feitos++;
        } else {
            afazer++;
        }
    }
    
    let afa = document.getElementById("afazer")
    afa.innerText = afazer

    let fei = document.getElementById("feitos")
    fei.innerText = feitos

}
