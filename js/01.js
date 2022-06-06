//Instancia Vue.js
const app = new Vue({
    //Detectar id a trabajar con Vue.js
    el: '#app',
    data:{
        titulo:'Hola mundo con vue',
        frutas:[
            {nombre:'Manzana',cantidad:10},
            {nombre:'Pera',cantidad:0},
            {nombre:'Platano',cantidad:20},
        ]
    }
})