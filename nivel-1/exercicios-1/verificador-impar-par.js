const rl = require('readline-sync');

console.log('Vamos descobrir se seu número é ímpar ou par');

const num = rl.questionInt('Digite um numero: \n');

if(num % 2 === 0) {
    console.log(`${num} = Par`);

} else {
    console.log(`${num} = Ímpar`);
}