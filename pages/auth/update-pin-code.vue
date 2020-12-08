<template>

<div class="container">
    
    

    <section class="update-pin-code flex-col flex items-center	">

           <img src="/img/shield.png"  width="250px" alt="">
           <br>

           <p class="max-w-xs">Pour des raisons de sécurité vous devez configurer un code maximal de 6 chiffre pour votre compte</p>

                    <br>

            <form class="flex flex-col auth-form-pin-code" >

                  
                   <div  class="group-pin-code-input   ">


                            <h3>Enter pin code</h3>
                            <br>
                            <div  >
                                <v-otp-input
                                class="wrapper-pin-code-input"
                                ref="otpInput"
                                input-classes="otp-input"
                               :separator="false"
                                :input-type="'password'"
                                :num-inputs="6"
                                :should-auto-focus="true"
                                :is-input-num="true"
                                @on-change="handleOnChange"
                                @on-complete="handleOnComplete"
                                />
                            </div>
            
                                        
                  </div>     
                  <br>             
                   <div  class="group-pin-code-input  ">


                            <h3>Enter pin code</h3>
                            <br>
                            <div class="wrapper-pin-code-input">
                                <v-otp-input
                                class="wrapper-pin-code-input"
                                ref="otpInput"
                                input-classes="otp-input"
                                :separator="false"
                                :num-inputs="6"
                                 :input-type="'password'"
                                :should-auto-focus="true"
                                :is-input-num="true"
                                @on-change="handleOnChange"
                                @on-complete="handleOnComplete"
                                />

                            </div>
            
                                        
                  </div>
                
            </form>

                <br>
                <br>
            <section  class="footer-update-pin-code">
                


                <div class="group-checkbox-text flex ">
                    <v-checkbox color="primary" 
                     class="group-checkbox-text-checkbox"

                
                 
                    ></v-checkbox>

                   <div class="text-left pl-4 mb-4 overflow-wrap: break-word ">
                      Le mot de passe de Pursa n'est pas
                        le meme que le votre dfsdfsdfsd
                        fsdfsdfsdsfdLe mot

                   </div>

                </div>


                <div class="group-checkbox-text flex ">
                    <v-checkbox color="primary"
                  class="group-checkbox-text-checkbox"

                 
                    ></v-checkbox>

                   <div class="text-left pl-4 mb-4 overflow-wrap: break-word ">
                       Le mot de passe de Pursa n'est pas
                        le meme que le votre dfsdfsdfsd
                        fsdfsdfsdsfdLe mot de p

                   </div>

                </div>


                <div class="group-checkbox-text flex ">
                    <v-checkbox  :color="'red darken-3'"

                    class="group-checkbox-text-checkbox"
                
                 
                    ></v-checkbox>

                   <div class="text-left pl-4 mb-4 overflow-wrap:break-word  ">
                     Le mot de passe de Pursa n'est pas
                        le m
                   </div>

                </div>


                 <div class="flex w-full">

                 
                     <nuxt-link :to="{name:'dashboard'}" class="m-auto">
                        <button class="bg-green-300 m-auto text-white font-bold py-2 px-4 rounded">
                          Valider
                        </button>   
                    </nuxt-link>

                </div>
                <br><br>
                
                
                  <div class="flex w-full text-center">

                    <span class="m-auto">Le Faire plutard</span>

                </div>



            </section>
        
    </section> 
    
  

</div>
</template>

<script>

    export default{
      layout:'empty-layout',
       data() {

           return {

               code:''
           }
       },

         methods: {
            handleOnComplete(value) {
            console.log('OTP completed: ', value);
            },
            handleOnChange(value) {
            console.log('OTP changed: ', value);
            },
            handleClearInput() {
            this.$refs.otpInput.clearInput();
            },
  },
    }
</script>


<style lang="scss">
  .otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    &.error {
      border: 1px solid red !important;
    }
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>