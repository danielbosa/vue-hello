const { createApp } = Vue 
//destrutturazione! prendo da ogg Vue il metodo createApp

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            myArray: ['ciao'],
            obj: {
                name: 'Pippo',
                surname :'Topolinia',
                image: './img/Ajeje-2.png'
            },
            myclass: 'red',
            email: '',
            text: '',
        }
    },
    methods: {}
});

app.mount('#app');