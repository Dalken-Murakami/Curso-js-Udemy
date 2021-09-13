const nome = "Rebeca"
const concatenacao = 'olá ' + nome + '!';
const template = `
Olá 
${nome}!`   // fez a interpolacao
console.log(concatenacao, template);

// expressoes...

console.log(`1 + 1 = ${1 +1}`);

const up = texto => texto.toUppderCase()
console.log(`Ei.. ${up('cuidado')}!`);