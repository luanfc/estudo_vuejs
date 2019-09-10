// função construtora que cria a instancia do Vue
new Vue({
    // el: id do elemento que deve ser controlado pelo Vue
    el: '#desafio',
    data: {
        nome: 'Luan',
        idade: 25,
        linkImg: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        aleatorio() {
            return Math.random()
        },
        // retornando idade utilizando função
        idadeVezes3() {
            return this.idade * 3
        }
    }
})