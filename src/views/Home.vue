<template>
  <v-container>
    <acompanhamento />
    <entidade />
    <informacoes />
    <v-app-bar app color="#F5CF00" dark>
      <router-link class="link-home" to="/">
        <v-icon> mdi-home </v-icon>
      </router-link>
    </v-app-bar>

    <div class="homepage">
      <v-container
        class="
          amber--text
          text--lighten-5
          font-weight-bold
          text-uppercase text-h9 text-center
          mb-3
          mt-5
        "
      >
        <div id="op1" class="mb-3 mt-5">
          <router-link class="link-informacoes" to='/Informacoes'>
            <h2>Informações</h2>
            <v-icon>mdi-letter-g-box-outline</v-icon>
          </router-link>
        </div>

        <div id="op2" class="mb-3 mt-5">
        <router-link class="link-entidades" to="/entidade">
          <h2 class="">Entidades</h2>
        </router-link>
        </div>

        <div id="op3" class="mb-3 mt-5">
          <router-link class="link-acompanhamento" to="/Acompanhamento">
          <h2 class="">Acompanhamento</h2>
                  </router-link>
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import Entidade from "../components/Entidade";
import Acompanhamento from "../components/Acompanhamento";
import Informacoes from "../components/Informacoes";

export default {
  name: "Home",

  components: {
    Entidade,
    Acompanhamento,
    Informacoes,
  },

};
</script>

<style scoped>
h2 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
#op1 {
  height: 23vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f57c00;
  border-radius: 10px;
}
#op2 {
  height: 23vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffb300;

  border-radius: 10px;
}
#op3 {
  height: 23vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffca28;
  border-radius: 10px;
}

.homepage {
  flex-direction: column;
}
</style>