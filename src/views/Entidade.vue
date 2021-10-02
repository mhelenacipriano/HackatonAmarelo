<template>
  <v-container>
    <h2 class="text-h6 text-center mb-7 mt-1">
      Entidades de Prevenção
    </h2>
    <TabelaAPI :entidades="EntidadesLista"/>
     <p>
        <a href="#" class="mt-4">
          Volta ao topo
        </a>
    </p>
  </v-container>
</template>

<script>
import TabelaAPI from '../components/TabelaAPI.vue'

  export default {
    name: 'Entidade',

    components: {
      TabelaAPI
    },

    data() {
      return {
        EntidadesLista: []
      }
    },

    created() {
      fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
      .then(response => response.json())
      .then(json => {
        this.EntidadesLista = json
      })
    },

  }
</script>

<style scoped>

</style>