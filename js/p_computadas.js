//Instanciar Vue.js
const app = new Vue({
    el:'#app',
    data:{
        mensaje:'Hola desde Vue.js',
        contador:0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');//reverse es para sacar resultado invertido y join lo une
        },
        color(){
            // Color retorna color de la barra y si se cumple la condición cambia de color
            return {
                'bg-success': this.contador<=10,
                'bg-warning': this.contador >10 && this.contador <20,
                'bg-danger': this.contador>20
            }
        }
    }
})