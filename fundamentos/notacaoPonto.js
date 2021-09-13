console.log(Math.ceil(6.1))


const objt1 = {}
objt1.nome = 'Bola'
// objt1['nome'] = 'bola2'  a partir de uma string eu consigo acessar o objeto.
console.log(objt1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}
const objt2 = new Obj ('Cadeira')
const objt3 = new Obj ('Mesa')
console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()