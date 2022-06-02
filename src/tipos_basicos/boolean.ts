let estaAtivo: boolean;

estaAtivo = true

function mapearStatusUsuario(status:boolean) {
    if (status) {
        return `usario ativo`
    } else {
        return `usuario nao ativo`
    }

}
mapearStatusUsuario(true);

