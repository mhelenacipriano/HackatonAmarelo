<template>
  <v-app class="background">
    <v-main>
        <v-app-bar app color="#F5CF00" dark>
          <router-link class="link-home" to="/">
          <v-icon> mdi-home </v-icon>
        </router-link>
      </v-app-bar>
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

.background{
  background-color: #FFF3E0 !important;
}

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


