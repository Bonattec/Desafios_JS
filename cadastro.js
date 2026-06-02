// Desafio 01 - Cadastro de Pessoa

/* 
    Crie um objeto chamado pessoa contendo:
    - nome
    - idade
    - cidade
    
    Após a criação:
    - Altere a idade
    - Adiciome uma profissão
    - Remova a cidade
    
    No fim, exiba o objeto final.
    */
const pessoa = {
    nome: "Gabriel", 
    idade: 22, 
    cidade: "Capanema"
}

console.log(pessoa);

pessoa.profissão = "Açougueiro";
pessoa.idade = 24; 

delete pessoa.cidade;
console.log(pessoa);