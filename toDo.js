const input = document.getElementById("input");
const ulCont = document.getElementById("list-container");
const para = document.getElementById("alert"); 

function add(){
    if(input.value == ''){ 
        para.innerHTML = "Eingabe fehlt";
    }
    else{
        para.innerHTML = "";
        let li = document.createElement("li");
        let delButton = document.createElement("button");
        delButton.innerText = "Delete"
        li.innerHTML = input.value;
        ulCont.appendChild(li);
        li.appendChild(delButton);
    }
    input.value ="";
    saveData();
}

ulCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ulCont.innerHTML);
}

function showTask(){
    ulCont.innerHTML = localStorage.getItem("data");
}
showTask();