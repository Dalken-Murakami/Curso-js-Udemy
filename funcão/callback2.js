const notas =[7.7, 6.5, 5.2, 9.8, 3.6, 7.1, 9.0]

// sem usar o callback

let notasBaixas1 =[]
for (let i in notas){
 if (notas[i] < 7) {
     notasBaixas1.push(notas[i])
 }
}
console.log(notasBaixas1)

// usando callback

notasBaixas = notas.filter(function (nota){                   //a melhor forma para aplicar no problema.
    return nota < 7
}
)
console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)