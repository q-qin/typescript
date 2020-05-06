<template>
  <div class="hello">
    <KView>{{ msg }}</KView>
    <a @click="handleToParent">点击传送给父组件</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Child extends Vue {
  @Prop() private msg!: string;

  // private created () {
  // }

  @Emit('callback')
  private handleToParent () {
    const params = {
      key: 'output',
      value: this.msg
    };
    return params; // return将要传递的值
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
