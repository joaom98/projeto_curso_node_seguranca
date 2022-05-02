import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function hashComSal(senha){
    const sal = randomBytes(16).toString('hex');
    // Investigar melhor essas funções
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`
}

class Usuario{
    constructor(usuario, senha){
        this.usuario = usuario;
        [this.sal, this.hash] = hashComSal(senha).split(":");
    }
    
    autentica(usuario, senha){

        if (this.usuario === usuario){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
    
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal); 
    
            if ( hashesCorrespondem ){
                console.log("Usuário autenticado com sucesso!")
                return true;
            }
        }
        
        console.log("Usuário ou senha incorretos.")
        return false;
    }
}

const usuario = new Usuario("jm", "minhaSenha")

console.table([usuario.nome, usuario.sal, usuario.hash])

// Caso de sucesso
usuario.autentica('jm', 'minhaSenha')

// Caso de insucesso
usuario.autentica('jm', 'outraSenha')