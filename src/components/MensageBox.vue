<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Sobre
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Descrição
        </v-card-title>

        <v-card-text>
            {{msg}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'MensageBox',

    props: {
        mensagem: Text
    },

    data () {
        return {
        dialog: false,
        msg: this.mensagem
        }
    },
  }
</script>