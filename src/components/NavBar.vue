<template>
    <v-bottom-navigation
        v-model="value"
        class="text-white nav-bar bg-transparent"
        flat
        fluid
        :elevation="0"
    >
        <v-btn variant="plain" :ripple="false" to="/" class="text-uppercase text-body-1 bg-black">
            Home
        </v-btn>

        <v-btn variant="plain" :ripple="false" to="/sobre" class="text-uppercase text-body-1 bg-black"> 
            Sobre
        </v-btn>
        <v-btn variant="plain" :ripple="false" to="/educa" class="text-uppercase text-body-1 bg-black"> 
            Educação
        </v-btn>

        <v-btn variant="plain" :ripple="false" to="/projetos" class="text-uppercase text-body-1 bg-black">
            Projetos
        </v-btn>
        <v-btn variant="plain" :ripple="false" to="/contato" class="text-uppercase text-body-1 bg-black">
            Contato
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.borda{
    border: 1px solid red;
}

</style>