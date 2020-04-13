<template>
  <div class="list">
    <h1>This is an list page</h1>
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
