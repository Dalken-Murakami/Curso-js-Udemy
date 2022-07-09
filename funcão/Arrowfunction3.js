let comparaComThis = function (param) {
        console.log(this === param)
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThis = para => console.log(this === param)  // arrow é mais previsivel e mais logico
comparaComThisArrow(global)   // objeto global
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThis(obj)