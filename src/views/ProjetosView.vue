<template>
    <v-container fluid class="background-imagem fill-height overflow-hidden"
    v-if="projetos.length > 0"
    >
      
    <v-row class="fill-height">
      
      <v-col cols="0" md="2"></v-col>
      <v-col cols="12" md="8" class="d-flex flex-column mt-15 px-0 px-sm-5" >
        
        <div aria-label="titulo" class="mb-5" ref="colunaUm" :class="classUm">
          <h1 class="text-center text-h2 font-weight-medium text-white">Projetos</h1>
      
        </div>

        <div aria-label="projetos" class="d-flex flex-wrap justify-center mt-10 mt-md-0">
          
          <v-card class="mx-md-2 text-white my-2 background-card d-flex flex-column justify-center align-center card"  height="240" v-for="(projeto, index) in projetos" :key="index"  ref="colunaDois" :class="classDois" outlined>
            <v-list-item>
            <v-list-item-content class="ma-0 text-center">
                <v-list-item-title class="text-h5 mb-1">{{ projeto.title }}</v-list-item-title>
                <v-list-item-subtitle class="mb-1">{{ projeto.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
                <v-img class="mx-auto" width="180" :src="`./img/${projeto.image}`" alt=""></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
            <v-btn outlined  class="bg-dark" :href="projeto.deployLink" target="_blank">Deploy</v-btn>
            <v-btn outlined class="bg-dark" :href="projeto.githubLink" target="_blank">GitHub</v-btn>
            <v-div class=" mx-1 mx-md-5">
              <v-icon class="mx-1" v-for="(icon,index) in projeto.icons" :key="index" :color="icon.color" :class="icon.icon"></v-icon>
            </v-div>
            </v-card-actions>
            
            
        </v-card>
        </div>
      </v-col>
      <v-col cols="0" md="2"></v-col>
    </v-row>
    </v-container>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';
  
  
  
  

  
  
  const projetos = [
    {
      class: 'fora-left',
      title: 'Digital.com',
      subtitle: 'Landing Page - Marketing digital',
      icons: [
        { icon: 'fab fa-html5', color: '#E44D26' },
        { icon: 'fab fa-css3-alt', color: '#264DE4' },
        { icon: 'fab fa-square-js', color: '#F7DF1E' },
      ],
      image: 'Digital-Mini.png',
      deployLink: 'https://kelsonson.github.io/Marketing-Digital/',
      githubLink: 'https://github.com/KelsonSon/Marketing-Digital'
    },

    {
      class: 'fora-right',
      title: 'FireLog',
      subtitle: 'Login/Cadastro - LocalStorage',
      icons: [
        { icon: 'fa-brands fa-html5', color: '#E44D26' },
        { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
        { icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
      ],
      image: 'FireLog-Mini.png',
      deployLink: 'https://kelsonson.github.io/FireLog-TelaLogin/',
      githubLink: 'https://github.com/KelsonSon/FireLog-TelaLogin'
    },

    {
      class: 'fora-left',
      title: 'SandMaker',
      subtitle: 'Criar sanduiches - Dashboard pedidos',
      icons: [
        { icon: 'fa-brands fa-html5', color: '#E44D26' },
        { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
        { icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
      ],
      image: 'Sanduiche-Mini.png',
      deployLink: 'https://6467df59c369830ee502a077--taupe-halva-605057.netlify.app',
      githubLink: 'https://github.com/KelsonSon/Sanduiche-Maker'
    },
    {
      class: 'fora-right',
      title: 'Portfolio',
      subtitle: 'Meu Portfolio - Vuetify',
      icons: [
        { icon: 'fa-brands fa-html5', color: '#E44D26' },
        { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
        { icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
        { icon: 'fa-brands fa-vuejs', color: '#1976D2' },
      ],
      image: 'Portfolio-Mini.png',
      deployLink: 'https://kelsonson.neocities.org',
      githubLink: 'https://github.com/KelsonSon/portfolio'
    },
    {
      class: 'fora-left',
      title: 'Job Mudanças',
      subtitle: 'LandingPage - Página de serviço',
      icons: [
        { icon: 'fa-brands fa-html5', color: '#E44D26' },
        { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
        { icon: 'fa-brands fa-square-js', color: '#F7DF1E' }
      ],
      image: 'JobMudanças-Mini.png',
      deployLink: 'https://jobmudancas.neocities.org',
      githubLink: 'https://github.com/KelsonSon/Job-Mudancas'
    },
    {
      class: 'fora-right',
      title: 'MyPlan',
      subtitle: 'ToDo List - Login/Cadastro',
      icons: [
        { icon: 'fa-brands fa-html5', color: '#E44D26' },
        { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
        { icon: 'fa-brands fa-square-js', color: '#F7DF1E' }
      ],
      image: 'MyPlan-Mini.png',
      deployLink: 'https://kelsonson.github.io/MyPlan/index.html',
      githubLink: 'https://github.com/KelsonSon/MyPlan'
    }, 
  ]

  
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
  .card{
    width: 420px;
  }
  .background-imagem {
    background-image: url('../../public/img/background4.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .background-card{
    background-color: #0f0f0faa;
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

  @media (max-width:960px){
    .card{
      width: 320px;
    }
  }

  @media (max-width:300px){
    .card{
      width: 270px;
    }
  }
  </style>
  