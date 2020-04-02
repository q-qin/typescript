<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{getcount}}{{msg}}
    <input v-model="text">
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch, Emit } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import myMixins from '@/mixins';
import { login } from '@/api/user';

@Component({
  components: { HelloWorld },
  mixins: [myMixins]
})
export default class Home extends Vue {
  msg = 'helloworld';
  count = 0;
  text = '';

  private created () {
    console.log('getter:', this.$store.getters.token);
    this.$on('emit-todo', (n: string) => {
      this.count++;
      console.log('emit-todo', n);
    });
    this.$on('reset', (n: string) => {
      console.log('emit-reset', n);
    });

    this.todo('todo');
    console.log(this.value);
    login({ a: 1 });
  }

  get getcount () {
    return this.count + 1;
  }

  @Emit('reset')

  @Emit()
  emitTodo (n: string) {
    this.count++;
    console.log('emitTodo hello', n);
  }

  todo (str: string) {
    this.count++;
    console.log(str);
    this.emitTodo('world');
  }

  @Watch('text')
  onChangeValue (newVal: string, oldVal: string) {
    console.log(newVal, oldVal);
  }
}
</script>
<style lang="scss" scoped>
  .home{
    font-size: 12px;
  }
</style>
