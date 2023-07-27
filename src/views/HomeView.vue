<template>
  <v-container fluid class="fill-height background-imagem ">
     <v-row class="fill-height">
      <v-col cols="12" md="6" class="text-white  pt-md-10 d-flex flex-column justify-center justify-md-start"
        ref="colunaUm" :class="classUm"
      >
      <h1 class="text-center mt-sm-15  mr-md-15">PORTFOLIO</h1>
         <div class=" w-75 align-self-md-end align-self-center text-md-start pr-md-5 mt-md-15 mt-sm-10 pl-md-15 pt-10  text-center">
          <h1 class="text-sm-h1 text-h2 font-weight-medium">KELSON</h1>
          <h1 class="text-sm-h1 text-h2 font-weight-medium">SOARES</h1>
          <p class="text-sm-h4 text-h5 font-weight-light ">ANALISTA E</p>
          <p class="text-sm-h4 text-h5 font-weight-light ">DESENVOLVEDOR</p>
          <p class="text-sm-h4 text-h5 font-weight-light">DE SISTEMAS</p>
         </div>
  
      </v-col>
      <v-col cols="12" md="6" class=" d-flex align-center align-md-end justify-center justify-md-end"
        ref="colunaDois" :class="classDois"
      >
         
          <div class="d-flex flex-wrap justify-center mx-md-10 mt-0 text-white icons ">
              <v-icon class="mx-2 my-5 icon" size="90" v-for="(icon,index) in icons" :key="index" :class="icon"></v-icon>
              <v-icon icon="$vuetify" class="mx-2 my-5" size="90"></v-icon>
              
          </div>
          
        
      </v-col>
     </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";


  const icons = [
    'fab fa-html5',
    'fab fa-css3-alt',
    'fab fa-js-square',
    'fab fa-bootstrap',
    'fab fa-vuejs',
    ];

    const colunaUm = ref(null)
    const colunaDois = ref(null)
    const classUm = ref('fora-left')
    const classDois = ref('fora-right')

    function show(){
      classUm.value = 'dentro-left'
      classDois.value = 'dentro-right'
    }
    onMounted(()=>{
      setTimeout(()=>{
        show()
      
      },200)
    })
  



</script>

<style scoped>
.background-imagem {
  background-image: url('../../public/img/background1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.icons{
  width: 50%;
}


.fora-left{
  transform: translateX(-100vw);
  filter: blur(3px);
  opacity: 0.2;
}
.dentro-left{
  transition:ease-in-out 0.5s;
  transform: translateX(0);
  opacity: 1;
}

.fora-right{
  transform: translateX(100vw);
  filter: blur(3px);
  opacity: 0.2;
}
.dentro-right{
  transition:ease-in-out 0.5s;
  transform: translateX(0);
  opacity: 1;
}

@media (max-width:960px) {
  .background-imagem{
    background-image: none;
    background-color: black;
  }
  .icons{
    width: 75%;
  }
  
  
}
@media (max-width:768px){
  .icons{
    width: 100%; 
  }
}

</style>