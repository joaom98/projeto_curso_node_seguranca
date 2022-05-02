const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./5-chaves')

const dados = "Essa string vai ser assinada!"

// Assinatura

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(assinatura);

// Enviando apenas o arquivo e assinatura -> Verificando

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')

console.log(ehVerificado)