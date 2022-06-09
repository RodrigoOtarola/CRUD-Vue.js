//Instanciar Vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            //set, setea el valor de item.
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea: function (index) {
            this.tareas.splice(index, 1)//splice, para eliminar
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
    },
    //Metodo created.
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
})