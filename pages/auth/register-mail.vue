<template>


 <auth>
    
  
    <template v-slot:body>


                <div class="text-center">
                  
                  <span>
                    Entrez une adresse email valide ci-dessous.
                      <br>
                    <strong class="text-green-DEFAULT">NB:</strong> Un code de vérification sera envoyé pour compléter le processus
                    d'inscription
                  </span>
                </div>

            <form action="#" class="p-4 flex flex-col">
           
           
              
                    <div class="relative  w-full flex m-auto">

                        <div >
                     
                                <i class="material-icons mt-6">person</i>

                   
                        </div> 
                        
                        <div class="w-full">
                     

                          <v-text-field  class="w-full"
                              label="Entrez votre email"
                              clearable
                            ></v-text-field>                   
                        </div>

                    </div>
                   

                <div class="flex w-full">

                    <nuxt-link :to="{name:'auth-verify-mail'}" class="m-auto">
                        <button class="bg-green-300 m-auto text-white font-bold py-2 px-4 rounded">
                          S'inscrire
                        </button>   
                    </nuxt-link>
                    

                </div>
            </form>
      </template>


      <template v-slot:footer>
      
         <div class="flex justify-center items-center  flex-col  mt-6">
                    <a href="#" target="_blank" class="inline-flex items-center font-bold text-green-700 hover:text-green-700 text-xs text-center">
                        
                    
                        <span class="ml-2">Vous avez un compte? <strong>Connectez-vous à la place</strong> </span>

                    </a>  
              
                  
              </div>
      </template>
   </auth>
</template>

<script>

export default {
    layout: 'auth-layout',
    data() {
        return {

        }
    }
}
</script>
