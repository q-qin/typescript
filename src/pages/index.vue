<template>
  <yd-layout style="background-color:rgba(242,242,242,1)">
    <!-- <yd-navbar slot="navbar" title="NavBar">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>-->
    <router-view/>
    <yd-tabbar slot="tabbar" active-color="#0bb20c" padding=".2rem" fontsize="12px">
      <yd-tabbar-item title="首页" link="/" :active="activepath=='/'">
        <span name="home" class="iconfont b icon-ziyouhuodong" slot="icon"></span>
      </yd-tabbar-item>
      <yd-tabbar-item title="发现" link="/list" :active="activepath=='/list'">
        <span
          name="home"
          class="iconfont b icon-hongbao"
          slot="icon"
        ></span>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" @click.capture.native="$dialog.alert({mes:'敬请期待'})">
        <span name="home" class="iconfont b icon-ziyuan" slot="icon"></span>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ComponentName extends Vue {
  activepath: string = "";
  @Watch("$route")
  change(route: { path: string }) {
    this.activepath = route.path;
  }
  mounted() {
    this.activepath = this.$route.path;
  }
}
</script>

<style lang="scss" scoped>
</style>