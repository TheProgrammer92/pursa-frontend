
import Vue from 'vue'

import vSelect from 'vue-select'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.component('v-select', vSelect)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)