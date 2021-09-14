// função em JS é first-class- Obtject
// Higher-order function

// criar de forma literal
function fun1() { }


// Armazenar em uma váriavel
const fun2 = function  () { }

// armazenar em um array
const array = [function (a, b) {return a + b }, fun1, fun2 ]
console.log(array[0](2, 3))


// armazenar em  atributos de objetos

const obj = {}
obj.falar = function () { return "eiii"}
console.log(obj. falar())

// passar uma f unção como parametro
function run (fun){
    fun()
}

run(function() { console.log('executando..') })

// uma função ela pode retornar ou conter uma função//
function soma (a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}

soma(2, 3)(4)

const cindoMais = soma (2, 3)
cindoMais(4)