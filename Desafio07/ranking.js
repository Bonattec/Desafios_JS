/*
DESAFIO 07 - RANKING DE JOGADORES

Uma competição precisa exibir a calssificação dos participantes.

Crie um array contendo o nome de 4 jogadores.

Utilize uma estrutura de repetição para mostrar:

1° Jogador
2° Jogador
3° Jogador
4° Jogador

A posição deve ser gerada automaticamente pelo sistema.
*/
const jogadores = ["Gabriel", "Lucas", "Luiz", "Leonardo"]
    for(i = 0; i < jogadores.length; i++) {
        console.log(`${[i + 1]}° Jogador: ${jogadores[i]}`)
        
    }
