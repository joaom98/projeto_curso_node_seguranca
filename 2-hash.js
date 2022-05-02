import { createHash } from 'crypto'


function hash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario{
    constructor(usuario, senha){
        this.usuario = usuario;
        this.hash = hash(senha);
    }
    
    autentica(usuario, senha){
        if (this.usuario === usuario && this.hash === hash(senha)){
            console.log("Usuário autenticado com sucesso!")
            return true;
        }

        console.log("Usuário ou senha incorretos.")
        return false;
    }
}

const usuario = new Usuario("jm", "minhaSenha")

console.log( usuario.hash )

// Caso de sucesso
usuario.autentica('jm', 'minhaSenha')

// Caso de insucesso
usuario.autentica('jm', 'outraSenha')