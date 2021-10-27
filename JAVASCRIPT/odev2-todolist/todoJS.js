ulDOM = document.querySelector("#list");
inputDOM = document.querySelector("#task");
allList = document.querySelectorAll("li");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : ["3 Litre Su İç","Ödevleri Yap", "En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"];


window.onload=start();


function start(){
    for(let i = 0; i<itemsArray.length; i++){
        let newChild = document.createElement("li");
        let newBtn = document.createElement("button");
        let listText = document.createElement("span");
        newBtn.classList.add("float-right");
        newBtn.innerHTML="X";
        newBtn.onclick = deleteElement;
        listText.innerHTML = itemsArray[i];
        newChild.append(listText);
        newChild.append(newBtn);
        newChild.onclick = checked;
        ulDOM.append(newChild);
    }
}


function newElement(){
    if(inputDOM.value != "" && inputDOM.value[0] != " "){
        let newChild = document.createElement("li");
		let newBtn = document.createElement("button");
		let listText = document.createElement("span");
		newBtn.classList.add("float-right");
		newBtn.innerHTML="X";
		newBtn.onclick = deleteElement;
		newChild.onclick = checked;
        listText.innerHTML=inputDOM.value;
        newChild.append(listText);
        newChild.append(newBtn);
        ulDOM.append(newChild);
        $('#liveToast').toast('show');

        itemsArray.push(listText.innerHTML);

        localStorage.setItem('items', JSON.stringify(itemsArray));
    
    }
    else{
        $('.error').toast('show');
    }
    inputDOM.value = "";
    
}

function deleteElement(e){
    let prnElement = e.target.parentElement;
    let spanText = prnElement.querySelector("span").innerHTML;

    e.target.parentElement.remove();


    itemsArray = itemsArray.filter(x=> x !== spanText);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    
    //this.parentElement.remove();
}


function checked(){

    this.classList.toggle("checked");
    
}
