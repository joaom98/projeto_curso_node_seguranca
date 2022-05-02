const senhaSecreta = "minhasenhasupersecreta";

// Cifra de César
function CifrarMensagem (mensagem, movimentos){
    mensagem = mensagem.split("").map( (caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos)
    } )

    return mensagem.join("");
}

function DecifrarMensagem (mensagem, movimentos){
    mensagem = mensagem.split("").map( (caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    } )

    return mensagem.join("");
}

const mensagemCifrada = CifrarMensagem(senhaSecreta, 2);

const mensagemDecifrada = DecifrarMensagem(mensagemCifrada, 2);

console.log(mensagemCifrada, mensagemDecifrada)