import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
import '@/assets/sass/style.scss'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueMask)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')