let inputField = document.getElementById("inputField");
let addToDobuttom = document.getElementById("addToDo");
let addtoContainer = document.getElementById("tocontainer");


addToDobuttom.addEventListener('click',function(){
    var paragaph = document.createElement('p');
    paragaph.innerText = inputField.value;

    addtoContainer.appendChild(paragaph);
    inputField.value = " ";
    paragaph.addEventListener('click', function(){
        paragaph.style.textDecoration = "line-through";
    })
    paragaph.addEventListener('dblclick', function(){
        addtoContainer.removeChild(paragaph);
    })
    
})