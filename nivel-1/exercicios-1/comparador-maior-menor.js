const rl = require('readline-sync');

console.log(`
    Olá mundo, vamos comparar dois números seus e descobrir se é maior ou menor que o segundo número digitado...
    `)

const num1 = rl.questionInt('Digite um numero:\n')
const num2 = rl.questionInt('Digite outro numero:\n')

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num1 < num2) {
    console.log(`${num1} é menor que ${num2}`)
} else {
    console.log(`Não brinca, como vai comparar dois números iguais? Inteligente!`)
}