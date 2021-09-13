function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprartv50 =  trabalho1 && trabalho2
   // const omprartv32 =  !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprartv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete  // operador unario
    return {  comprarSorvete: comprarSorvete, comprartv50, comprartv32, mantersaudavel }
}
console.log(compras (true, true))
console.log(compras(true, false))
console.log(compras(false, false))