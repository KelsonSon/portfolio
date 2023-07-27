<template>
  <v-container fluid class="background-imagem fill-height overflow-hidden pb-5">
    <v-row class="fill-height">
     
      <v-col cols="12" class="pt-15 px-sm-15">
        <div class="box-title" ref="colunaUm" :class="classUm">
          <h1 class="text-white text-md-end text-center mx-md-15 mt-md-10 text-sm-h1 font-weight-medium">SOBRE MIM</h1>
        </div>

        <div class=" px-5 px-md-0 mx-md-15 pr-md-15 pt-10 text-white"
        ref="colunaDois" :class="classDois"
        >
          <p class="text-sm-h5 text-md-end text-justify mr-md-5">
            Recifense de 28 anos. Graduando em Análise e Desenvolvimento de Sistemas pela UNINTER.
            Sou um desenvolvedor web front-end autodidata, apaixonado por tecnologia.
            Aprendi o que sei por meio de cursos específicos na área de desenvolvimento front-end.
            Decidi ingressar nessa área para seguir minha paixão e encontrar oportunidades de
            aprendizado e crescimento.
          </p>

          <p class="text-sm-h5 text-md-end text-justify mr-md-5">

            Minha motivação vem da possibilidade de criar interfaces interativas e envolventes que
            melhorem a experiência dos usuários. Estou determinado a expandir meus conhecimentos e
            habilidades, seja por meio de cursos, workshops ou projetos práticos. Tenho experiência em
            HTML, CSS e JavaScript, mas estou constantemente explorando novas tecnologias e
            frameworks para me tornar um profissional mais completo e versátil.
          </p>

          <p class="text-sm-h5 text-md-end text-justify mr-md-5">
            Estou entusiasmado com as possibilidades que a área de desenvolvimento oferece,
            adoro enfrentar desafios e trabalhar em equipe para criar produtos e experiências incríveis.
            Ser um desenvolvedor é mais do que uma ocupação para mim, é uma paixão que me
            impulsiona a buscar conhecimento, inovação e crescimento constantes. Estou comprometido
            em fazer o que amo e ansioso para as oportunidades que estão por vir.
          </p>

        </div>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
.background-imagem{
  background-image: url('../../public/img/background2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.box-title{
  margin-right: 15vw;
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
  opacity: 0;
}
.dentro-right{
  transition:ease-in-out 0.5s;
  transform: translateX(0);
  opacity: 1;
}

@media (max-width:960px){
  .background-imagem{
    background-image: none;
    background-color: black;
  }
  .box-title{
  margin-right: 0;
}
}
</style>