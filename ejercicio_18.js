const prompt = require('prompt-sync')();

var array=[],num;
function breakStatement(num){
    for (var i =0;i<10;i++) {
        num=num+2;
        if (num===i) break;
        else {
            array.push(num);
        }
    }
    if (i<10) {
        return "se interrumpio la ejecucion ";
    }
    else {
        return array
    }
}

num= parseInt(prompt("ingrese un numero: "))
breakStatement(num)
console.log("["+array+"]")
