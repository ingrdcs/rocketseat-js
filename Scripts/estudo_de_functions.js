//declarando as variaveis

let num1 = parseInt(prompt("Digite um numero"))
let num2 = parseInt(prompt("Digite outro um numero"))

opcaoMat = prompt("o que deseja fazer:\n 1- somar\n 2- subtrair\n 3- multiplicar\n 4- dividir")


//criando as funções matematicas para usar 
//somar
function somar() {
    resultado = num1 + num2
}
//subtrair
function subtrair() {
    resultado = num1 - num2
}

//multiplicar 
function multiplicar() {
    resultado = num1 * num2
}

// divisão
function divisao() {
    resultado = num1 / num2
}

switch (opcaoMat) {
    case '1' && 'somar':
        somar()
        break;

    case '2' && 'subtrair':
        subtrair()
        break;

    case '3' && 'multiplicar':
        multiplicar()
        break;

    case '4' && 'dividir':
        divisao()
        break;

}

alert(`O resultado é ${resultado}`)
