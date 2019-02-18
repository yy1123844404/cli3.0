<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Homepage extends Vue {
  // 初始化数据
  person = {
    name: "cccc",
    age: 12
  };
  //生命周期函数钩子
  mounted(): void {
    //   this.echarts.init()
    console.log(123)
  }
}
</script>
<style lang="stylus">
.eltitle
  height 50px !important

.el-header,.el-main
  padding 0

.el-main
  height 100%
  overflow-y hidden 
</style>
