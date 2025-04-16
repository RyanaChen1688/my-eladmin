import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import SvgIcon from '@/components/SvgIcon'
import App from './App.vue'


Vue.use(ElementUI);
Vue.component('svg-icon', SvgIcon)
const req = require.context('./assets/svg', false, /\.svg$/)
req.keys().map(req)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
