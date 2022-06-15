Vue.component('padre', {
    template:
        `
    <div class="p-5 bg-dark text-white">
    <h3>Componente Padre:{{numeroPadre}}</h3>
    <button class="btn btn-danger" @click="numeroPadre++">+</button>
    <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre:0
        }
    }

})