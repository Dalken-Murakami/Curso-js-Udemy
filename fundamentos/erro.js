function tratarErroELancar(erro) {
    //throw new Error('....')
   //00throw 10
   //throw true
   //throw 'MENSSAGEM'
        throw {
        nome: erro.name,
        msng:erro.messege
    }

function imprimirNomeGritado (obj){
    try {

  
    console.log(obj.name.toUpperCase() + '!!!!')
} catch (e) {
    tratarErroELancar(e)
    //finaly {
        console.log('final')
    }

}
}
const obj = {nome: 'Roberto'}
//imprimirNomeGritado(obj)