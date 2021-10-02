<template>
  <v-container>
    <h2>
      Entidades
    </h2>
    <TabelaAPI :entidades="EntidadesLista"/>
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