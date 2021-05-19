import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//컴포넌트를 전역등록하고 싶다면 Vue 인스턴스가 생성되기 전에 컴포넌트를 생성한다
//하지만 CLI를 사용해 vue 프로젝트를 생성했을 경우 컴포넌트를 vue파일로 빼준다

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
