// classes e interfaces e herança e modificadores de acesso

// classes e funções
 class Usuario {
    public nome;
    public idade; 
    constructor(nome: string, idade:number) {
        this.nome = name;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;
    constructor(name: string, age: number, jogo: string){
        super(name, age);

        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `estou jogando, no momento ${this.jogo}`;
    }

    static queHorasSao(){
        return Date();
    }
}



const jogador = new Player("affonso", 39, "Doom Imortal");
console.log(jogador.dizerOJogoAtual())
console.log(Player.queHorasSao())

// console.log(jogador) 

//static


// private, protected, public
// public: acessivel de forma geral, dentro e fora da classe
// private: é acessível apenas dentro da classe onde o campo foi criado
// protected: é acessivel apenas dentro da classe ( e subclasses) onde o campo foi criado

class Jogo {
    private nome;
    constructor(nome: string){
        this.nome = nome;
    }

    dizerNome(){
        return `O nome do jogo é: ${this.nome}`;
    }
}



/*  class JogoComDescricao extends Jogo {
    private descricao;

    constructor(nome: string, descricao: string){
        super(nome);

        this.descricao = descricao;

    }

    dizerNomeComDescricao(){
        return `o nome do jogo é::: ${this.nome}`
   
}  */

/* const doom = new JogoComDescricao("Doom Imortal", "mortes aleatorias");
console.log(doom.dizerNome()); */

// extends

// interfaces
interface IJogoComDescricao {
  //  nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

/* class JogoComDescricao extends Jogo implements IJogoComDescricao {
    public descricao;

    constructor(nome: string, descricao: string){
        super(nome);

        this.descricao = descricao;

    }

} */

type TjogoComDescriao = {
    descricao: string;
    dizerNomeComDescricao(): string;
}

const obj: IJogoComDescricao = {
    descricao: "descricao do jogo",
    dizerNomeComDescricao(){
        return "123"
    }
}
