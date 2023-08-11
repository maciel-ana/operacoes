//Declaração de variáveis 
let operacao = prompt('Informe a operação desejada:')
let numero1 = Number(prompt('Informe o primeiro número:'))
let numero2 = Number(prompt("Informe o segundo número:"))

//Verificar a operação matematica selecionada
if(operacao == "+" ) {
    let resultado = numero1 + numero2
    document.write("O resultado da soma é" + resultado + ".")
}
else if ( operacao == "-"){
    let resultado = numero1 - numero2
    document.write("O resultado da subtração é" + resultado + ".")
} 
else if (operacao == "*"){
    let resultado = numero1 * numero2 
    document.write("O resultado da multiplicação é" + resultado + ".")
}
else if( operacao == "/"){
    let resultado = numero1 / numero2
    document.write("O resultado da divisão é:" + resultado + ".")
}
