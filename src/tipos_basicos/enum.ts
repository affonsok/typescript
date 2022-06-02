enum permissoes {
    admin,
    editor,
    comum
}

enum Cores {
red = '#ff0000',
yellow = '#ffff00',
green = "#008000"
}

const usuario = {
    perfil: Cores.red,
    nivel: permissoes.admin,
};

console.log(usuario)