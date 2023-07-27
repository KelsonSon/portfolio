<template>
    <v-container fluid class="fill-height background-imagem overflow-hidden pb-5">
        <v-row class="fill-height">
            <v-col cols="12" md="5" class=" d-flex flex-column align-center justify-center mt-md-10"
            ref="colunaUm" :class="classUm">
                <div class="mt-md-15 ml-md-15 pt-md-10 text-white">
                    <h1 class="text-h2 my-15 my-md-5 mx-md-10 font-weight-medium">EDUCAÇÃO</h1>
                    <div aria-label="Faculdade" class="mx-md-10 my-5">
                        <p class="font-weight-bold text-h5 text-sm-h3 text-md-h5">2023 - Atual</p>
                        <p class="font-weight-bold text-h5 text-sm-h3 text-md-h5">UNINTER</p>
                        <P class="text-md-h6 text-h6 text-sm-h5 font-weight-light">Análise e desenvolvimento de <br> sistemas</P>
                    </div>
                    <div aria-label="Curso" class="mx-md-10 my-5">
                        <p class="font-weight-bold text-h5 text-sm-h3 text-md-h5">2023 - Atual</p>
                        <p class="font-weight-bold text-h5 text-sm-h3 text-md-h5">UNDEMY - Cursos online</p>
                        <P class="text-md-h6 text-h6 text-sm-h5 font-weight-light">Desenvolvimento we front-end</P>
                    </div>
                    <div aria-label="Conhecimentos" class="mx-md-10">
                        <p class="font-weight-bold text-h4 text-sm-h4 text-md-h5">Conhecimentos</p>
                        <P class="text-md-h6 text-h6 text-sm-h5 font-weight-light">HTML/CSS | JAVASCRIPT | BOOTSTRAP <br> VUE.JS | VUETIFY | UI/UX | PYTHON </P>
                    </div>
                </div>

            </v-col>
            <v-col cols="12" md="7" >
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const colunaUm = ref(null)

const classUm = ref('fora-left')


function show(){
    classUm.value = 'dentro-left'
    
}
onMounted(()=>{
    setTimeout(()=>{
    show()
    
    },200)
})
</script>

<style scoped>
.background-imagem{
    background-image: url('../../public/img/background3.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

@media (max-width:960px){
.background-imagem{
    background-image: none;
    background-color: black;
}
}
</style>