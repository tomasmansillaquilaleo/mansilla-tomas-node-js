const prompt = require("prompt-sync")();
var rango=[]
var Comienzonum=parseInt(prompt("ingrese numero inicial: "))
//var nuevoNum=Comienzonum
var Finalnum=parseInt(prompt("ingrese numero final: "))
var Sumanum=parseInt(prompt("ingrese numero sumador: "))
var primerVez=true
var Sumanum2=Sumanum
var Sumanum=Comienzonum+Sumanum

function Rango(){
    if (primeraVez){
        Lista.push(numComienzo)
        primerVez=false
    }
    for (numComienzo; Sumanum<Finalnum; Sumanum){
        
        Lista.push(Sumanum)
        //console.log("entra al for")
        Sumanum=Sumanum+Sumanum2
    }
    console.log(Lista)

}
Rango()