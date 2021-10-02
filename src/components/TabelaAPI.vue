<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th>
                        Logo
                    </th>
                    <th colspan="1" class="text-left">
                        Nome
                    </th>
                    <th>
                        Descrição
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(entidade) in entidades"
                    :key="entidade.id"
                >
                    <td >
                        <v-avatar 
                        size="70"
                        rounded
                        tile>
                            <img :src="entidade.imagem">
                        </v-avatar>
                    </td>

                    <td> 
                        <a  class="link" :href= "entidade.link" target="_blank">{{ entidade.nome }}</a>
                        <v-container>
                            <v-chip color="Gray">
                                {{entidade.tipo}}
                            </v-chip>
                        </v-container>
                    </td>
                    <td>
                        <MensageBox :mensagem="entidade.descricao"/>
                    </td >

                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>

import MensageBox from './MensageBox.vue'

export default {
    name: 'TabelaAPI',

    components:{
        MensageBox
    },

    props: {
        entidades: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

.link {
    color: black;
}

</style>
