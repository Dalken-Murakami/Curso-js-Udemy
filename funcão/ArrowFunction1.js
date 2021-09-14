let dobro = function (a){
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return está implícito  
console.log(dobro(Math.PI))

let ola = function (){
    return "Ola"
}
ola = () => 'Olá'  // possui parametro

ola = _ => 'ola'
console.log(ola())