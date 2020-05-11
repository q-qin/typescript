<template>
  <div class="home">
    <Child :msg="phone" @callback="callback" />
    <div>{{getcount}}{{msg}}</div>
    <div>
      <van-field v-model="phone" label="用户名" placeholder="用户名" clearable />
      <van-field v-model="password" type="password" label="密码" placeholder="密码" clearable />
      <van-button type="primary" block @click="login">登 录</van-button>
      <router-link to="/list">
        <van-button type="warning" block>去列表页</van-button>
      </router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import Child from '@/components/Child.vue';
import MyMixins from '@/mixins';
import { login } from '@/api/user';
import tcb from 'tcb-js-sdk';

const app = tcb.init({
  env: 'tclodubase-140254'
});
// components + mixins
@Component({
  components: { Child },
  mixins: [MyMixins]
})
export default class Home extends Vue {
  // data
  msg = 'helloworld';
  count = 0;
  phone = '';
  password = '';

  // created
  private async created () {
    console.log('getter:', this.$store.getters.token);
    // mixins混入数据，可以做搜索条件
    console.log(this.value);
    console.log(this.foo('bar'));
    const auth = app.auth();
    // // ***用户信息***
    await auth.signInAnonymously();
    const loginState = await auth.getLoginState();
    console.log('auth,返回 --> ', loginState);
    // ***云函数***
    const param: any = {
      name: 'collection_get', data: { database: 'all_goods', title: '将进酒' }
    };
    const { result } = await app.callFunction(param);
    console.log('云函数,返回 --> ', result);
    // ***云数据库***
    const db = app.database();
    const { data } = await db.collection('all_goods').where({}).get();
    console.log('云数据库,返回 --> ', data);
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

  foo (name: string): string {
    const bar: Array<string|boolean|number> = ['100', '200', true, 500];
    return name + bar.join(',');
  }

  // computed
  get getcount () {
    return this.count + 1;
  }

  // 登录
  async login () {
    // const data = await this.$store.dispatch('user/login', {
    //   phone: this.phone,
    //   password: this.password
    // });
    const param: any = {
      name: 'func_login', data: { name: this.phone, password: this.password }
    };
    const { result } = await app.callFunction(param);
    if (result.code === 200) {
      this.$toast('登录成功了');
    } else {
      this.$toast(result.msg);
    }
  }
};

</script>
<style lang="scss" scoped>
  .home{
    font-size: 12px;
  }
</style>
