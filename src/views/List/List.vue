<template>
  <div>
    这是列表页
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class List extends Vue {
  private created () {
    console.log('List');
  }
}
</script>
