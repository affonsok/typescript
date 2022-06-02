// type assertions

type JogoAssertion = {
    nome: string;
    descricao: string;
}

/* let jogo = {} as JogoAssertion;
jogo.nome = "nome do jogo"
jogo.descricao = "descricao do jogo" */

// ou

let jogo = <JogoAssertion>{};
jogo.nome = "nome do jogo"
jogo.descricao = "descricao do jogo"

