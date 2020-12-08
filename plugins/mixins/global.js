import Vue from 'vue';



const global = {

    install(Vue, options) {

        Vue.mixin({
            data() {
                return {

                }
            },
            computed: {

             
               
            },

            methods: {

                asset_url(url) {

                    return url
                },
            }
            
        })
    }
}

Vue.use(global);