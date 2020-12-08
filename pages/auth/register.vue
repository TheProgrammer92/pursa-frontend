<template>


 <auth>
    
   <template v-slot:header>

       <div class=" header-auth   flex self-center   ">

            <img src="/logo.png" width="100px" alt="">

            <span> S'inscrire</span>

        </div>
    </template>
    <template v-slot:body>


            <form action="#" >
           
                    <div class="relative flex">
                        <div  class="pr-4" >
                     
                                <i class="material-icons mt-6">person</i>

                   
                        </div> 
                        
                        <div class="group-form">
                     

                        <v-text-field
                            label="Entrez votre prénom"
                            clearable
                          ></v-text-field>                   
                        </div>

                    </div>


                    <div class="relative flex">
                        <div  class="pr-4" >
                     
                                <i class="material-icons mt-6">person</i>

                   
                        </div> 
                        
                        <div  class="group-form">
                     


                       <v-text-field
                          label="Entrez votre nom de famille"
                          clearable
                        ></v-text-field>                       
                        </div>

                    </div>
                    
                      <div class="relative flex">
                        <div class="pr-4"  >
                     
                                <i class="material-icons mt-6">person</i>

                   
                        </div> 
                        
                        <div class="group-form">
                     


                    
                        <vue-password :badge="false"  placeholder="Enter password" v-model="password"/>
                       
                   
                        </div>

                    </div>
                    
                      <div class="relative flex">
                        <div class="pr-4"  >
                     
                                <i class="material-icons mt-6">person</i>

                   
                        </div> 
                        
                        <div class="group-form">
                     


                    
                        <vue-password :badge="false"  placeholder="Repeter password" v-model="password"/>
                       
                   
                        </div>

                    </div>



    
                  
                      
                      
                    <div class="relative flex">
                        <div  class="pr-4" >
                     
                                <i class="material-icons m-auto">person</i>

                   
                        </div> 
                        
                        <div class="group-form">


                            <vue-tel-input v-model="telModel" :badge="false" v-bind="bindProps"></vue-tel-input>


                                       
                        </div>

                    </div>  

                    <br>
                    <div class="relative flex">
                        <div  class="pr-4" >
                     
                                <i class="material-icons m-auto">person</i>

                   
                        </div> 
                        
                        <div class="group-form">


                          <v-select :inputClasses="'v-input v-text-field'" :options="options" label="title">
                              <template slot="option" slot-scope="option">
                                <div class="flex">
                                    <img :src="option.cardImage"  width="20" height="20" />
                                    <span class="ml-2">
                                    {{ option.title }}
                                      </span>
                                </div>
                              </template>
                        </v-select>

                                       
                        </div>

                    </div>


                </div>
                <br>

                
                 <div class="flex justify-center items-center  flex-col ">
                  

                    <v-checkbox   color="green" hide-details
 >
                    <template v-slot:label>
                      <div>
                       J'accepte les 
                        
                         <strong class="text-green-300">termes et conditions</strong>
                      
                      </div>
                    </template>
                  </v-checkbox>
              
                  
              </div>

              <br>

                <div class="flex w-full">

                  

                     <nuxt-link :to="{name:'auth-update-pin-code'}" class="m-auto">
                        <button class="bg-green-300 m-auto text-white font-bold py-2 px-4 rounded">
                         S'inscrire
                        </button>   
                    </nuxt-link>

                </div>
            </form>
      </template>


     

   </auth>
</template>

<script>

export default {
    layout: 'auth-layout',
 

    data() {
    
        return {
      password: null,

            telModel:"",

             options: [
              {
                title: "cameroun (XOF)",
                cardImage: "https://images.squarespace-cdn.com/content/54ac7efae4b09c6fe41bbaf9/1568937431323-6LD31ES3S8NZ5FZRY5IN/Do-You-Call-Jesus-Lord-1.jpg?content-type=image%2Fjpeg"
              },
              {
                title: "chine (China)",
                cardImage: "https://images.squarespace-cdn.com/content/54ac7efae4b09c6fe41bbaf9/1568937431323-6LD31ES3S8NZ5FZRY5IN/Do-You-Call-Jesus-Lord-1.jpg?content-type=image%2Fjpeg"
              }
            ],


            phone: "0123456789",
              bindProps: {
                mode: "international",
                defaultCountry: "FR",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: false,
                placeholder: "Enter a phone number",
                required: false,
                enabledCountryCode: false,
                enabledFlags: true,
                preferredCountries: ["AU", "BR"],
                onlyCountries: [],
                ignoredCountries: [],
                autocomplete: "off",
                name: "telephone",
                maxLen: 25,
                wrapperClasses: "",
                inputClasses: "",
                dropdownOptions: {
                  disabledDialCode: false
                },
                inputOptions: {
                  showDialCode: false
                }
      }
        }
    }
}
</script>

<style>
h1,.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}

#app .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1)
}

#app .dropdown li:last-child {
  border-bottom: none;
}

#app .dropdown li a {
  padding: 10px 20px;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.25em;
}

#app .dropdown li a .fa {
  padding-right: 0.5em;
}
</style>