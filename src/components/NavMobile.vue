<template>
  <v-card class="fill-height">
    <v-layout class="fill-height">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        class="fill-height"

      >
        <v-list-item
        class="my-5">
        <h1>KelsonSon</h1>
        </v-list-item>

        <v-divider></v-divider>
        
       
        <v-list class="my-5">
          <v-list-item prepend-icon="mdi-home"  to="/" value="home">
            <h3>HOME</h3>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-information"  to="/sobre" value="sobre">
            <h3>SOBRE</h3>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-school"  to="/educa" value="educa">
            <h3>EDUCAÇÃO</h3>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-application"  to="/projetos" value="projetos">
            <h3>PROJETOS</h3>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-forum"  to="/contato" value="contato">
            <h3>CONTATO</h3>
          </v-list-item>
          <v-divider></v-divider>
          
        </v-list>

        
      
      </v-navigation-drawer>
      <v-main>
        <div class="w-100 bg-transparent d-flex justify-end position-absolute nav-mob">
          <v-btn
            size="x-large"
            class="ma-2"
            color="dark"
            @click.stop="drawer = !drawer"
            icon="mdi-menu"
          >
          </v-btn>
        </div>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref } from 'vue';
  const drawer = ref(null)
</script>

<style scoped>
.nav-mob{
  z-index: 999;
}
</style>