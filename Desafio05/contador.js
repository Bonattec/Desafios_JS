/* 
DESAFIO 05 - CONTADOR INTELIGENTE

Crie uma função chamada contador() que receba:
- valor inicial
- valor final

A função deve exibir todos os números entre os valores informados.

Após concluir, crie uma segunda versão capaz de realizar
a contagem regressiva.
*/

function contador(inicio, fim) {
    for(let i = inicio; i <= fim; i++) {
        console.log(i);
}
console.log("Contagem concluída!")
}
contador(0,10)

function contadorRegressivo(inicio, fim) {
    for(let i = fim; i >= inicio; i--) {
        console.log(i);
}
console.log("Contagem concluída!")
}
contadorRegressivo(0,10)