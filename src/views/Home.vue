<template>
  <v-container class="container">
    <acompanhamento />
    <entidade />
    <informacoes />
    <v-app-bar app color="#F5CF00" dark>
      <router-link class="link-home" to="/">
        <v-icon> mdi-home </v-icon>
      </router-link>
    </v-app-bar>

    <div class="homepage mt-5">
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
         <v-img
            contain
            class="imagem mb-2"
            src="../assets/celular.jpg"
          >
          </v-img>
          <router-link class="link-informacoes" to="/Informacoes">
            <h2>Informações</h2>
            
          </router-link>
        </div>

        <div id="op2" class="mb-3 mt-5">
          <v-img
            contain
            class="imagem mb-2"
            src="../assets/hands.jpg"
          >
          </v-img>
          <router-link class="link-entidades" to="/Entidade">
            <h2>Entidades</h2>
          </router-link>
        </div>

        <div id="op3" class="mb-3 mt-5"
        >
        <v-img
            contain
            class="imagem mb-2"
            src="../assets/therapy.jpg"
          >
          </v-img>
          <router-link class="link-acompanhamento" to="/Acompanhamento">
            <h2 class="">Quer Conversar ?</h2>
          </router-link>
        </div>

        
      </v-container>
         <p class="text-caption text-justify text mt-5 font-weight-thin">
          "O CVV - Centro de Valorização da Vida, é uma associação sem fins
          lucrativos que atua desde 1962, prestando serviço voluntário gratuito
          de apoio emocional e prevenção ao suicídio, com garantia de sigilo e
          anonimato, 24h por dia. Para acessar o serviço, entre no site do CVV
          e/ou ligue 188."
        </p>
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

.container{
  background-color: #F8E1
}
h2 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.imagem {
  max-height: 25%;
  max-width: auto;
  display: flex;
}


.homepage {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75vh;
}
#op1 {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f57c00;
  border-radius: 10px;
}
#op2 {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f57c00;
  border-radius: 10px;
}
#op3 {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f57c00;
  border-radius: 10px;
}

.homepage {
  flex-direction: column;
}
</style>