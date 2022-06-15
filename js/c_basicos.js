Vue.component('saludo', {
    template:
        ` <div>
          <h2>{{ saludo }}</h2>
          <h3>Prueba<h3>
                  </div>`,
    data() {
        return {
            saludo: 'Hola desde function data'
        }
    }
});
