function getPreco(importo = 0, moeda ='R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + importo)}`
}

const produto = {
    nome:'notebook',
    preco: 4509,
    desc: 0.15,
    getPreco
}
global.getPreco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 444490, desc: 0.20}

console.log(getPreco.call (carro))
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, "$"]))