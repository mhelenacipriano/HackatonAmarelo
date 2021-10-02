<template>
  <v-container>
    <acompanhamento/>
    <entidade/>
    <informacoes/>
  </v-container>
</template>

<script>
  import Entidade from '../components/Entidade'
  import Acompanhamento from '../components/Acompanhamento'
  import Informacoes from '../components/Informacoes'

  export default {
    name: 'Home',

    components: {
      Entidade,
      Acompanhamento,
      Informacoes
    },
  }
</script>
