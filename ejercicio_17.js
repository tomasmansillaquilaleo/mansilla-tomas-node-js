const prompt = require('prompt-sync')();
function nuevoArreglo(numero) {
  let arr = [];

  for(let i = 1; i <= numero; i++) {
    arr.push(i);
  }

  return arr;
}

// Ejemplo uso
let Arreglo = nuevoArreglo(20);
console.log(Arreglo);