const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cifrar ou criptografar

const mensagem = 'demonstração no curso de criptografia';
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

/// Cifra

// Confirmar se tem diferença entre o utf8 e utf-8 aqui nesses parametros
// Verificar se a troca de posição de parâmetros está certa tbm
const mensagemCifrada = cifra.update(mensagem, 'utf8', 'hex') + cifra.final('hex');
console.log(`Cifrado: ${mensagemCifrada}`);

/// Aqui acontece a transmissão

/// Decifra

const decifra = createDecipheriv('aes256', chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf8');
console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`);
