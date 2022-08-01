import validator from './validator.js';
// console.log(validator)

let btnValidar = document.getElementById("enviar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" =>function "clickbtnValidar"


function clickbtnValidar(event) {
    event.preventDefault();
    let creditCardNumber = document.getElementById("cardNumber").value;//let "creditCardNumber" to be used on validator.isValid
    // console.log(creditCardNumber);

    
    let detalle = document.getElementById("resultado");
    let validResult = validator.isValid(creditCardNumber);//result from validator
    detalle.innerText = validResult;

    if (validResult === true) {
        detalle.style.color = "green";
        detalle.innerText = "Valid Card"
    } 
    
    else {
        detalle.style.color = "red";
        detalle.innerText = "Invalid Card"

    }
     
     document.getElementById("cardNumber").value =  validator.maskify(creditCardNumber)
    
   
    }

const primeraPagina = document.getElementById("pagina1");
const segundaPagina = document.getElementById("pagina2");
const mostrarPagina2 = document.getElementById("mostrarPagina2");

mostrarPagina2.addEventListener("click", () => {
    primeraPagina.style.display = "none"; 
    segundaPagina.style.display = "block";
});
  

 
  
   