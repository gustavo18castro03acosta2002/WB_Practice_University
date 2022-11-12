// Variables

let buyBtn = document.getElementsByClassName('buy-btn');
let mainBoxContainer = document.getElementsByClassName("main-box-container"); 

// Event Listeners

for(let i = 0; i < buyBtn.length; i++){

    buyBtn[i].addEventListener('click', function(){
    
        mainBoxContainer[0].style.display = 'block';
    });
}


window.addEventListener('click', function(e){

    if (e.target === mainBoxContainer[0]){
        mainBoxContainer[0].style.display = 'none';
    }
});

//  Asientos 

let butacasSelect = document.getElementsByClassName('seat-btn');
const listaButacasSelect = new Array(35).fill(0);

// Event Listener

for(let i = 0; i < butacasSelect.length; i++){

    butacasSelect[i].addEventListener('click', function(){

        butacasSelect[i].style.backgroundColor = 'lightgreen';
        listaButacasSelect[i] = 1;  
    });

}



