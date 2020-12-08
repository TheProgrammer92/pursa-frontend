<template>


 <auth>
    
   <template v-slot:header>

       <div class=" header-auth   flex self-center   ">

            <img src="/logo.png" width="100px" alt="">

            <span> S'inscrire</span>

        </div>
    </template>

    <template v-slot:body>


                <div class="text-center">
                  
                  <span>
                   Un lien de vérification par email a été envoyé à <strong class="text-green-DEFAULT"> admin@test.com. </strong>
                   Veuillez ouvrir votre boîte de messagerie
                    et entrez le code ci-dessous.
                  </span>
                </div>

            <form action="#" class="p-4 flex flex-col">
           
           
              
                    <div class="relative flex m-auto">

                            <v-text-field
                                label="Code"
                                single-line
                                outlined
                            ></v-text-field>

                    </div>
                   

                <div class="flex w-full">


                        <nuxt-link :to="{name:'auth-register'}" class="m-auto">
                            <button class="bg-green-300 m-auto text-white font-bold py-2 px-4 rounded">
                                Verifier
                            </button>   
                        </nuxt-link>

                 

                </div>
            </form>
      </template>

       <template v-slot:footer>
      
         <div class="flex justify-center items-center  flex-col  mt-6">
                    <a href="#" target="_blank" class="inline-flex items-center font-bold text-green-700 hover:text-green-700 text-xs text-center">
                        
                    
                        <span class="ml-2">Pas le bon mail ? <strong>Corrigez-le !</strong> </span>

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
