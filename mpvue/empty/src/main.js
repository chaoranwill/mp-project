import mpvueToastRegistry from 'mptoast/registry'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

mpvueToastRegistry(Vue)
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // 页面路由
    pages: ['^pages/index/main'],
    // 页面配置
    // 全局的顶部栏样式
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Test', // 标题
      navigationBarTextStyle: 'black'
    }
  }
}
