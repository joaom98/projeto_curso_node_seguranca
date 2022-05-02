const chaveSecreta = "ChaveSuperSecreta"

const jwt = require('jsonwebtoken');
const token = jwt.sign({ campoQualquer: 'dadoDoCampo' }, chaveSecreta);

console.log(token)

const tokenDecodificado = jwt.verify( token, chaveSecreta )

console.log(tokenDecodificado)