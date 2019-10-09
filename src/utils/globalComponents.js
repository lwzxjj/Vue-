// 导入需要注册的组件
import myHeader from '../components/Header.vue'
import myFooter from '../components/Footer.vue'

// 注册组件
const plugins = {
  install (Vue) {
    Vue.component('myHeader', myHeader)
    Vue.component('myFooter', myFooter)
  }
}

export default plugins
