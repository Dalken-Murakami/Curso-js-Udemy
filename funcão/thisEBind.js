const pessoa = {
    saudacao: 'bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
    pessoa.falar ()
    const falar = pessoa.falar
    falar()  // conflito entre paradigama: funcional e 00

    const falrDePessoa = pessoa.falar.bind(pessoa)
    falrDePessoa()

    