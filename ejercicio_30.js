const prompt = require("prompt-sync")();

var num1=1
var sumaLista=[]
var suma=0

while (num1!=0){
    var num1=parseInt(prompt("suma de numero, al ingresar '0' usted saldra: "))
    sumaLista.push(num1)
}
sumaLista.forEach (function(numero){
    suma += numero;
});
console.log(suma);
