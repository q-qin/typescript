<template>
  <div class="home">
    <Child :msg="phone" @callback="callback" />
    {{getcount}}{{msg}}
    <div>
      <input v-model="phone" type="text">
      <input type="password" v-model="password">
      <div @click="login">登 录</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import Child from '@/components/Child.vue';
import MyMixins from '@/mixins';
import { login } from '@/api/user';

@Component({
  components: { Child },
  mixins: [MyMixins]
})
export default class Home extends Vue {
  msg = 'helloworld';
  count = 0;
  phone = '';
  password = '';

  private created () {
    console.log('getter:', this.$store.getters.token);
    // 混入数据
    console.log(this.value);
  }

  // 监听
  @Watch('phone')
  onChangeValue (newVal: string, oldVal: string) {
    console.log(newVal, oldVal);
  }

  // 回调子组件事件
  callback (n: object) {
    console.log('callback', n);
  }

  // computed
  get getcount () {
    return this.count + 1;
  }

  // 登录
  async login () {
    const data = await this.$store.dispatch('user/login', {
      phone: this.phone,
      password: this.password
    });
  }
}
</script>
<style lang="scss" scoped>
  .home{
    font-size: 12px;
  }
</style>
