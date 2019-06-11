/* 基础模块 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


/* 第三方 */
import './thirdParty.js' 

/* 自定义全局变量或方法挂载 */
import utils from '@/utils';
Vue.prototype.routeTo = utils.routeTo; //示例  routeTo('login', {a:1, b:2})
Vue.prototype.percent = utils.percent;
import api from '@/api';
Vue.prototype.$api = api;
Vue.config.productionTip = false


/* 自定义公共模块 */
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/styles/index.scss' // global css
import './router/permission' // permission control


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
