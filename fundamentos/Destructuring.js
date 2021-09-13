// novo recurso do ES2015

//Usando operador destructuring!!!

const pessoa = {
    nome: 'Dalken',
    idade: '29',
    endereco: {
        logradouro: 'Rua do programador',
        numero: 191
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)


const {nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const {consta: {ag, num } } = pessoa
console.log(ag, num)