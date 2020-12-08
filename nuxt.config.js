

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {

    htmlAttrs: {
      lang: 'fr'
    },
    titleTemplate: '%s - purs',
    title: 'pursa-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {        
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons' 
    },
     {        
         rel: 'stylesheet',
         href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' 
    },
    
    {        
   

         rel: 'apple-touch-icon',
         href: 'img/pursaicon.svg' 
    }
    ],



  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/app.js',


    //client
      '~/plugins/libs/client/password.client.js',
      '~/plugins/libs/client/pinCodeInput.client.js',
      '~/plugins/libs/client/vueInTelInput.client.js',


      '~/plugins/mixins/global.js',
  

  ],


  

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  //  '@nuxtjs/html-validator',
   '@nuxtjs/tailwindcss'

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',

  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
     
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
