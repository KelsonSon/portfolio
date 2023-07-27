<template>
  <v-app>
    <v-main class="fill-height pa-0 d-none d-md-block">
      <NavBar/>
      <router-view/>
    </v-main>

    <v-main class="d-md-none fill-height pa-0">
      <NavMobile />
      
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavMobile from './components/NavMobile.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components:{
    NavBar,
    NavMobile
  },

  setup(){
    
  }
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}
.nav-bar {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
}

.borda{
    border: 1px solid red;
}
</style>
