<template>
   <div class="auth-container min-h-screen  bg-white m-auto items-center justify-center bg-gray-300">

    <div class="auth-form">

    <!--auth header -->
        <slot  name="header">
        </slot>
        <div class="mt-10">


 
            <!-- //auth body -->
           <slot name="body"/>






          </div>

          
          <!-- //auth footer -->
          <slot name="footer"/>
      
    </div>
</div>
</template>

