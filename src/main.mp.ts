import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import KboneUI from 'kbone-ui';
import 'kbone-ui/lib/weui/weui.css';

Vue.use(KboneUI);
Vue.config.productionTip = false;

// 需要将创建根组件实例的逻辑封装成方法
export default function createApp () {
  // 在小程序中如果要注入到 id 为 app 的 dom 节点上，需要主动创建
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  return new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}
