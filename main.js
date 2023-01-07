const ingressos = [];

//  NÃO ESQUECER para chamar ID usar # , para chamar class usar .

function addRedBorder(id){
    element = document.querySelector(`#${id})`);
    element.style.border = "5px solid red"
}


//  criando uma função para interação
function highlightCard(cardId){
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highlight");
}


function checkKeyboardCode(){

    document.addEventListener("keydown", (event) => {

        var name = event.key;
        var code = event.code;
        alert(`Tecla Pressionada ${name} \r\n Key code : ${code}`);
    }, false);
}
function addKeyboardEventListeners(){
    document.addEventListener("keydown", (event) => {
       
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if( code == 'Digit4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
            }
        
    }, 
    false);
}
   selectCard = (selector) =>  {
        var element = document.querySelector(selector);
        element.classList.toggle("card-selected");

        if(ingressos.includes(selector)) ingressos.pop(selector);
        else ingressos.push(selector)
    }

     showSelectedCards = () => {

        if(ingressos.lenght > 0) alert("Ingressos Selecionados:" + ingressos);
    }

      addKeyboardEventListeners();