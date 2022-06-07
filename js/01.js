//Instancia Vue.js
const app = new Vue({
    //Detectar id a trabajar con Vue.js
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 5},
            {nombre: 'Platano', cantidad: 20}
        ],
        nuevaFruta: ''
    },
    methods:{
        agregarFruta (){
            this.frutas.push({//Para acceder a las propiedades que estan dentro de cualquier metodo
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }
})