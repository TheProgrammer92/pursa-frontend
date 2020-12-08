<template>


 <auth>
    
    <template v-slot:header>

       <div class=" header-auth   flex self-center   ">

            <img src="/logo.png" width="100px" alt="">

            <span> Se connecter</span>

        </div>
    </template>
  
    <template v-slot:body>

        <form action="#" class="p-4">
           
                     <div class="relative flex">
                        <div   class="p-4	">
                     
                                <i class="material-icons mt-2">person</i>

                   
                        </div> 
                        
                        <div >
                     


                       <v-text-field
                          label="Entrez votre password"
                          clearable
                        ></v-text-field>                       
                        </div>

                    </div>
                    <div class="relative flex">
                        <div   class="p-4	">
                     
                                <i class="material-icons mt-2">person</i>

                   
                        </div> 
                        
                        <div >
                     


                       <v-text-field
                          label="Entrez votre password"
                          clearable
                        ></v-text-field>                       
                        </div>

                    </div>
                </div>

                <div class="flex w-full">

                    <nuxt-link :to="{name:'auth-register-mail'}" class="m-auto">
                        <button class="bg-green-300 m-auto text-white font-bold py-2 px-4 rounded">
                        Se connecter
                        </button>   
                    </nuxt-link>

                </div>
            </form>

       
    </template>


            
   



    <template v-slot:footer>
                  
            <div class="flex justify-center items-center  flex-col  mt-6">
                    <a href="#" target="_blank" class="inline-flex items-center font-bold text-green-700 hover:text-green-700 text-xs text-center">
                        
                    
                        <span class="ml-2">Mot de passe Oublié ?</span>

                    </a>  
                    <br>
                    
                    <a href="#" target="_blank" class="inline-flex items-center font-bold text-green-500 hover:text-green-700 text-xs text-center">
                        <span>
                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                    
                        <span class="ml-2">You don't have an account?</span>

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
