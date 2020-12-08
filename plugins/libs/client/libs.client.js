

import Vue from 'vue'

import Password from 'vue-password-strength-meter'
import VueTelInput from 'vue-tel-input'

import vSelect from 'vue-select'


import OtpInput from "@bachdgvn/vue-otp-input";

Vue.component('v-select', vSelect)
Vue.component("v-otp-input", OtpInput);
Vue.component('vue-password', Password)

Vue.use(OtpInput)
Vue.use(Password)
Vue.use(PincodeInput)
Vue.use(VueTelInput)