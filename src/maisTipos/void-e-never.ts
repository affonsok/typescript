function principal() {
    console.log("executando")
    return "1234";
}

principal()


// laços de repetição infinitos
// ou funções que disparam erros

function funcaoQueNuncaRetorna(): never {
    throw new Error("ola")
}

const a = funcaoQueNuncaRetorna()