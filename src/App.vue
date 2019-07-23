<template>
  <div id="app">
    <nv-loading :loading="isLoading"></nv-loading>
    <router-view v-wechat-title="$route.meta.title" v-show="!isLoading"/>
  </div>
</template>
<script>
import nvLoading from '@/components/loading.vue'
export default {
  components:{
    nvLoading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style  lang="scss">
@import "./assets/styles/index.scss";
</style>

