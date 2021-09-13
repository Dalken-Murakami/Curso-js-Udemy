let valor // não vou atribuir
console.log(valor)
valor = null  // ausência de valor
console.log(valor)
//console.log(valor.toString())  // vai dar error!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evidar atribuir undefined
console.log(!!produto.preco)
console.log(produto)