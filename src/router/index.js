import Vue from 'vue';
import VueRouter from 'vue-router';
// 1.安装插件
Vue.use(VueRouter)

// 2.创建ruouter
const routes = [
  
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router