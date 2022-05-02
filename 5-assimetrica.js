const { publicKey, privateKey } = require('./5-chaves')
const {  publicEncrypt, privateDecrypt } = require('crypto');

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
  );


console.log(dadosCriptografados.toString('hex'))

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
);

console.log(dadosDecifrados.toString('utf-8'));