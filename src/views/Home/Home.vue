<template>
  <div class="home">
    <Child :msg="phone" @callback="callback" />
    <KView>{{getcount}}{{msg}}</KView>
    <KView>
      <KInput label="手机号" v-model="phone" placeholder="手机号" clearable/>
      <KInput label="密码" type="password" v-model="password" placeholder="密码" clearable/>
      <KButton type="primary" @click="login">登 录</KButton>
      <router-link to="/list">
        <KButton type="warn" >去列表页</KButton>
      </router-link>
    </KView>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import Child from '@/components/Child.vue';
import MyMixins from '@/mixins';
import { login } from '@/api/user';
import tcb from 'tcb-js-sdk';

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
    const app = tcb.init({
      env: 'tclodubase-140254'
    });
    const auth = app.auth();
    await auth.signInAnonymously();
    // const loginState = await auth.getLoginState();
    // console.log(loginState);
    // ***云函数***
    const res = await app.callFunction({ name: 'collection_get', data: { database: 'all_goods' } });
    console.log('云函数,返回 --> ', res);
    // ***云数据库***
    // 1.获取数据库引用
    const db = app.database();
    const list = await db.collection('all_goods').where({}).get();
    console.log('云数据库,返回 --> ', list);
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
    const data = await this.$store.dispatch('user/login', {
      phone: this.phone,
      password: this.password
    });
  }
};

</script>
<style lang="scss" scoped>
  .home{
    font-size: 12px;
  }
</style>
