const prompt =require ("prompt-sync")();
let arregloLista=[1,2,3,4,5,6]
var divisor

divisor=parseInt(prompt("ingrese el divisor "))

function divisibles(){
    arregloLista.forEach(function(i){
        if (i%divisor==0); {
            console.log(i, "es divisor de: ",arregloLista)
        }
    });


}
divisibles()