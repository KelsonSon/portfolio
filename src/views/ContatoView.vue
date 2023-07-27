<template>
    <v-container fluid class=" fill-height background-imagem pt-15 overflow-hidden">
        <v-row class="fill-height pb-5">
            <v-col cols="0" md="1">
                
            </v-col>
            <v-col cols="12" md=5 class="mt-md-15 d-flex align-center justify-center text-white" ref="colunaUm" :class="classUm">
                <div class="mt-md-10">
                    <h1 class="text-center mx-5 text-h3 text-sm-h1 font-weight-medium">CONTATO</h1>
                    <v-list class="bg-dark mt-15 mx-md-5">
                        <v-list-item-group>
                            <v-list-item href="https://github.com/KelsonSon" target="_blank">
                            
                            <v-list-item-content class=" d-flex align-center">
                                <v-list-icon >
                                <v-icon class="fa-brands fa-github mx-5 my-1"></v-icon>
                            </v-list-icon>
                            <v-list-item-title>GitHub</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        <v-divider></v-divider>
                        <v-list-item-group>
                            <v-list-item href="https://www.linkedin.com/in/kelson-soares-a39a14261/?" target="_blank">
                            
                            <v-list-item-content class=" d-flex align-center">
                                <v-list-icon prepend>
                                <v-icon class="fa-brands fa-linkedin mx-5 my-1"></v-icon>
                                </v-list-icon>
                            <v-list-item-title>Linkedin</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        <v-divider></v-divider>
                        <v-list-item-group>
                            <v-list-item href="https://api.whatsapp.com/send/?phone=5581984378161&text&type=phone_number&app_absent=0" target="_blank">
                                
                                <v-list-item-content class=" d-flex align-center">
                                    <v-list-icon >
                                    <v-icon class="fab fa-whatsapp mx-5 my-1"></v-icon>
                                    </v-list-icon>
                                    <v-list-item-title>Whatsapp</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                   </v-list>
                </div>
            </v-col>
            <v-col cols="12" md="5" class=" mt-15 text-white" ref="colunaDois" :class="classDois">
                 <form
                    class="mt-md-15 pt-md-15"
                    action="https://formsubmit.co/kelson15k@gmail.com"
                    method="POST"
                    ref="emailForm"
                    @onsubmit.prevent="submit()"
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    type="text"
                    name="name"
                    label="Nome"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    label="E-mail"
                    name="email"
                    type="email"
                    required
                    ></v-text-field>
                    <v-textarea
                    v-model="textarea"
                    name="textarea"
                    filled
                    label="Mensagem"
                    auto-grow
                    ></v-textarea>
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://kelsonson.neocities.org">
                    <v-btn  type="submit" class="mr-4 bg-dark">
                    Enviar
                    </v-btn>
                </form>
            </v-col>
            <v-col cols="0" md="1">
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';


  

 
    const name = ref('');
    const email = ref('');
    const textarea = ref('');

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
    background-image: url('../../public/img/background5.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.fora-left{
  transform: translateY(-100vh);
  filter: blur(3px);
  opacity: 0.2;
}
.dentro-left{
  transition:ease-in-out 0.5s;
  transform: translateX(0);
  opacity: 1;
}

.fora-right{
  transform: translateY(100vh);
  filter: blur(3px);
  opacity: 0.2;
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
}
</style>