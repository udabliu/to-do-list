//função para apertar enter e acionar o botão
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const btnAdd = document.getElementById('btn-new-task');
        btnAdd.click();
    }
})

const localName = "to-do-list"
function newTask() {
    let input = document.getElementById("input-new-task")



// validações ↓

// verifica se o campo está vazio(está por conta do sinal de !) e se positivo envia uma mensagem ao usuário
    if(!input.value){
        alert('Digite algo para inserir em sua lista de tarefas')
    }

    else{
        let values =  JSON.parse(localStorage.getItem(localName) || "[]")
        values.push({
            name : input.value
        })

        localStorage.setItem(localName,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues(){
    let values =  JSON.parse(localStorage.getItem(localName) || "[]")
    let list = document.getElementById("to-do-list")
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++){

        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick = 'removeItem("${values[i]['name']}")'><i class="fa-solid fa-plus"></i></button></li>`
    }
}


function removeItem(data){
    let values =  JSON.parse(localStorage.getItem(localName) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localName,JSON.stringify(values))
    showValues()
}



showValues()