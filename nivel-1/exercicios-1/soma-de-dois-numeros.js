const rl = require('readline-sync');

let x = rl.questionInt('Digite um numero: ');
let y = rl.questionInt('Digite outro numero: ')
let soma = x + y

console.log(`A soma de ${x} + ${y} = ${soma}`)