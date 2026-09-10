const rl = require('readline-sync')

console.log(`
    Bem vindo a calculadora via terminal!
    `)

let x
let y
let continuar = true

x = rl.questionFloat('Digite o primeiro numero: ')
y = rl.questionFloat('Digite o segundo numero: ')


while(continuar){

    let operador

    console.log(`
        1 - SOMA (+)
        2 - SUBTRAÇÃO (-)
        3 - MULTIPLICAÇÃO (*)
        4 - DIVISÃO (/)
        `)

    operador = rl.questionInt('Qual operador para esse calculo? ')

    switch(operador){
        case 1:
            operador = '+'
            resultado = (x + y)
            break
        
        case 2:
            operador = '-'
            resultado = (x - y)
            break

        case 3:
            operador = '*'
            resultado = (x * y)
            break

        case 4:
            operador = '/'
            resultado = (x / y)
            break

        default:
            console.log('Digite um numero válido!')
            break
    }

    console.log(`${x} ${operador} ${y} = ${resultado}`)
    continuar = false
}

