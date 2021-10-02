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

                    <th class="text-left"> 
                        Tipo 
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
                        <a  :href= "entidade.link" target="_blank">{{ entidade.nome }}</a>
                        <v-container>
                            <v-chip color="orange">
                                {{entidade.tipo}}
                            </v-chip>
                        </v-container>

                    </td>

                    <td>
                        <v-chip
                            color="orange"
                        >{{entidade.tipo}}
                        </v-chip>
                    </td>

                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>
export default {
    name: 'TabelaAPI',
    props: {
        entidades: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>



</style>
