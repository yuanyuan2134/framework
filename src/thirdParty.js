import Vue from 'vue'

/* 第三方UI框架导入 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


/* 第三方工具库导入 */
import Cookies from 'js-cookie'
Vue.use(Element, {
  size: Cookies.get('size') || 'small', // set element-ui default size
})
import qs from 'qs';
Vue.prototype.$qs = qs;


/* 第三方组件库导入 */

//取色器
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

//拖拽
import VueDND from 'awe-dnd';
Vue.use(VueDND)

//打印
import utils from './utils'
Vue.use(utils.print) // 注册

//省市区县四级联动
import { pcaa } from 'area-data-vue';
import 'area-linkage-vue/dist/index.css';
import AreaLinkageVue from 'area-linkage-vue';
Vue.use(AreaLinkageVue)
Vue.prototype.$pcaa = pcaa;

//高德地图
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '23b66fd8d7e808965bc6730567f49a3c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
