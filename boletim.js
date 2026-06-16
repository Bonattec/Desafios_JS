/*
DESAFIO 03 - SISTEMA DE APROVAÇÃO

Crie uma função chamada vergicarAluno() que receba:
- nome
- nota

Regras: 
- Notam maior ou igual a 7 > Aprovado
- Notam maior ou igual a 5 e menor que 7 > Recuperação
- Notam menor que 5 > Reprovado

Exiba uma mensagem informando a situação do aluno.
*/

function verificarAluno(nome, nota) {
  if (nota >= 7) {
    console.log(nome + " Aprovado");
  } else if (nota >= 5 && nota < 7) {
    console.log(nome + " Recuperação");
  } else {
    console.log(nome + " Reprovado");
  }
}

(verificarAluno("Gabriel", 7));
