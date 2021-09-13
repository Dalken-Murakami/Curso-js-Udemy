const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8:
        case 7:
            console.log("aprovado")
            break
        case 6:
        case 5:
        case 4:
            console.log('recuperacao')
            break
            case 3:  case 2:  case 1:
            console.log ('reprovado')
            break
            default:
                console.log('nota invalida')
    }
                console.log('fim')
}
//swinth por padrão eu uso o breck para executar um dos casos e sair..
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.9)
imprimirResultado(3.9)
imprimirResultado(-1)
imprimirResultado(23)