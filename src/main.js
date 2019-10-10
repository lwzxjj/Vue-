// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index.vue'
import '../node_modules/swiper/css/swiper.min.css'

// 引入公共样式
import '../static/css/public.css'
import '../static/css/index.css'

// 引入注册组件文件
import components from './utils/globalComponents'
// 注册全局组件
Vue.use(components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 1、es6的语法，表示vue实例选项对象的render方法作为函数，接受传入参数h函数，返回h(App)的函数调用结果
  // 2、Vue在创建Vue实例时，通过调用render方法来渲染实例的DOM树
  // 3、Vue在调用render方法时，会创建一个createElement函数作为参数，也就是这里h的实参是createElement函数，
  // 然后createElement会以App为参数进行调用
  render: h => h(Index)
})
