const prompt = require("prompt-sync")();

var seg=parseInt(prompt("ingrese los segundos: "))

function toTime(){
    exedenteHS=seg%3600
    horas=(seg-exedenteHS)/3600
    exedenteMI=exedenteHS%60
    min=(exedenteHS-exedenteMI)/60
    console.log(horas, "HS con", minutos, "Min y", exedenteMI, "Seg")

}
toTime()