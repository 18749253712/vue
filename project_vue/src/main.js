// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import BaiduMap from 'vue-baidu-map'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui'
import store from './store'
Vue.prototype.$Indicator = Indicator
Vue.prototype.$Toast = MintUI.Toast
Vue.use(BaiduMap, {
// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '123456li'
});
Vue.use(VueScroller)
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI)
Vue.use(VueLazyload,{
	loading:'../../static/image/loading.gif'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
