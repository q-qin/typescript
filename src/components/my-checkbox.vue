<template>
  <div>
    <input type="checkbox" :checked="checked" @change="myChange">
  </div>
</template>
<script lang="ts">
import {Component, Vue, Model, Emit} from 'vue-property-decorator'

@Component
export default class MyCheckBox extends Vue{
  // checked
  @Model('change', {type:Boolean}) readonly checked!: boolean;

  @Emit('myCustomClick')
    myChange(event: Event){
      return event.target.checked;
    }
}
</script>