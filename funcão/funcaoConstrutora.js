function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
        // METODO PÚBLICO 01############
        this.acelerar = function(){
            if (velocidadeAtual + delta <= velocidadeMaxima) {
                velocidadeAtual += delta
            } else {
                velocidadeAtual = velocidadeMaxima

            }
        }
        // outro metodo público 02###########
        this.getvelocidadeAtual = function(){
                return velocidadeAtual
        }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
console.log(typeof Carro)
console.log(typeof ferrari)