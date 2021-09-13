var numero = 1 // se usar o let também não vai dar conflito.
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)