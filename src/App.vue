<template>
  <v-app>

    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.link-informacoes {
  color: white !important;
  text-decoration: none;
}

.link-entidades {
  color: white !important;
  text-decoration: none;
}

.link-acompanhamento {
  color: white !important;
  text-decoration: none;
}

.link-home {
  color: white !important;
  text-decoration: none;
}
</style>
