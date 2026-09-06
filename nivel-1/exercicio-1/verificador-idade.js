const rl = require('readline-sync')

let idade = rl.questionInt('Qual a sua idade?\n')

if(idade >= 18) {
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')}