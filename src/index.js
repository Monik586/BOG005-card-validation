//import validator from './validator.js';

//console.log(validator);
function capturaDeDatos () {
    const cardNumber=document.getElementById("cardNumber").value;
    console.log(cardNumber);

   
}
document.getElementById("enviar").addEventListener("click", capturaDeDatos);
