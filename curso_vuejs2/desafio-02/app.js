new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("teste")
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})