function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1   // somente inicada a variável, sem valor inicial

do{
        opcao = getInteiroAleatorioEntre(-1, 10)
        console.log(`Opcao escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a proxima!')