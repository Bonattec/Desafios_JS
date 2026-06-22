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
const filme2 = {
    titulo: "O Shrek",
    genero: "Comédia",
    ano: 2001
}


function exibirObjeto(exibir) {
    console.log(`Meu filme favorito é ${exibir.titulo}, ele é do gênero de ${exibir.genero} e lançou no ano de ${exibir.ano}`)
}

exibirObjeto(filme)
exibirObjeto(filme2)
