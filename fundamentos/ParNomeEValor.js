// par nome/valor
const saudacao = 'Salve!'  // conexto léxico 1

function exec(){
    const saudacao = 'fala ae!'  // contexto léxico 2
    return saudacao
}
// Objetos são grupos aninhados de pares, (nome/valor)  (chave/valor)

const cliente = {
    nome: 'Dalken',
    idade: '29',
    peso: '90',
    endereco:{
        logradouro: 'rua dali',
        numero: 57
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)