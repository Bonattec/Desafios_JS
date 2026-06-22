/*
DESAFIO 06 - FILME FAVORITO
Crie um objeto chamado filme contendo:
- título
- gênero
- ano

Crie uma função resposável por receber esse objeto
e exibir todas as informações formatadas no console
utilizando template string.

O objetivo é praticar a manipulação de objetos
e passagem de parâmetros para funções.
*/

const filme = {
    titulo: "O Hobbit",
    genero: "Aventura",
    ano: 2012
}

function exibirObjeto() {
    console.log(`Meu filme favorito é ${filme.titulo}, ele é do gênero de ${filme.genero} e lançou no ano de ${filme.ano}`)
}

exibirObjeto(filme)
