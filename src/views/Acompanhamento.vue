<template >
  <v-container>
    <h2 class="text-h5 text-center mb-7 mt-1">Quer Conversar ?</h2>
<!-- Verificar o fundo do nome e se ta alinhado-->   

 <v-img
      class="inicio-imagem mb-4"
      src="https://www.cvv.org.br/wp-content/uploads/2018/09/048DAA54-0D98-45BB-AD7E-C8C5C7FE0F3F.jpeg">
  </v-img>
   <h4 class="mt-2">Acompanhamento pagos:</h4>
 <!--  </ul> quando clicar no Acompanhamento pagos aparecer essa lista  -->
<ul>
      <li><a href="https://zenklub.com.br" target="_blank" rel="noopener">zenklub</a></li>
      <li><a href="https://www.getninjas.com.br/saude" target="_blank" rel="noopener">GetNinjas</a></li>
      <li><a href="https://www.vittude.com" target="_blank" rel="noopener">Vittude</a></li>
    </ul>
<h4 class="mt-2">Acompanhamento gratuito:</h4>
 <!--  </ul> quando clicar no Acompanhamento gratuito aparecer essa lista  -->
<ul>
      
      <li><a href="https://www.cvv.org.br/cvv-comunidade/" target="_blank" rel="noopener">Cvv Comunidade</a></li>
      <li><a href="https://www.fepo.com.br/psicologia/psicologo-online-gratuito/" target="_blank" rel="noopener">Fepo</a></li>
      <li><a href="https://focanodinheiro.neon.com.br/controle-financeiro/terapia-popular" target="_blank">11 Alternativas de Acompanhamentos gratuitos ou acessivel </a> </li>
      <li>Sistema Único de Saúde (SUS)</li>
      <li> Atendimento de universidades públicas</li>
      <li>Atendimento em organizações não-governamentais (ONGs)</li>
    
    </ul>
    


  <h4 class=" mb-3 mt-5">  Procure ajuda se você:</h4>
  <ul>
      <li>Sente-se desanimado com frequência.
</li>
      <li>Não sente mais vontade de conviver com a família ou amigos, isolando-se das pessoas e de possíveis atividades.
</li>
      <li>Sente-se irritado, apático e receoso constantemente.
</li>
      <li>Apresenta distúrbios do sono ou dificuldades para se alimentar.
</li>
      <li>Vivencia solidão, desesperança e impotência.
</li>
<li>Imagina como o mundo seria se você não tivesse nascido.
</li>
<li>Não vê a necessidade de executar tarefas diárias ou de honrar compromissos, como costumava fazer.
</li>
<li>Não consegue enxergar a saída para seus problemas nem um futuro onde se sinta melhor.
</li>
<li>Tem dificuldade para estabelecer laços de amizade com as pessoas.
</li>
<li>Apresenta humor instável com mudanças frequentes. 
</li>
<li>É incapaz de fazer planos para o futuro por não se achar capaz ou merecedor. 
</li>
<li>Sente-se inferior aos demais.
</li>
<li>Se culpa por acontecimentos passado. 
</li>
<li>É incapaz de gostar de sua personalidade, enxergar suas qualidades e amar a si mesmo. 
</li>



  </ul>

 


  <h4 class=" mb-3  mt-2" >O que não fazer:</h4>
    <p>Jamais ignore a situação de uma pessoa com comportamentos e pensamentos suicidas. Não entre em choque, fique envergonhado ou demonstre pânico. Não tente dizer que tudo vai ficar bem, diminuindo a dor da pessoa, sem agir para que isso aconteça.
</p>
<p>A principal medida é não fazer com que o problema pareça uma bobagem ou algo trivial. Não dê falsas garantias nem jure segredo, procure ajuda imediatamente. Principalmente, não deixe a pessoa sozinha em momentos de crise nem a julgue por seus atos.
</p>
<div class="meu-pontuador">
    <h2>Compartilhe esse site </h2>
    <h7><strong> uma vida pode ser salva:</strong> {{ contador }}</h7>
    <p>clique abaixo se você compartilhou</p>
  
    <button @click="somarUm">+</button>



    <p><a href="#" class="mt-4">Volta ao topo</a></p>
  </div>

  </v-container>
  
 

</template>


<script>

export default {
 
  name: 'meu-pontuador',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    removeUm() {
      this.contador--;
    },
    somarUm() {
      this.contador++;
    }
  }
}
</script>

<style scoped>
h4 {
  margin: 10px 0 0;
}
</style>