// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vr from 'vue-resource'

Vue.use(vr);
Vue.config.productionTip = false;
function setFont(){
  var baseWidth = 750; // 设计稿宽度
  // var baseHeight = 1232; // 设计稿高度
  var htmlFont = 16; // 预设的根元素html的font-size值
  var scale = window.innerWidth/baseWidth;
  document.getElementsByTagName('html')[0].style.fontSize = scale * htmlFont + 'px';
}
window.addEventListener('resize',setFont,false)
setFont();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
