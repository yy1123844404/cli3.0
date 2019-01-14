<template>
  <div class="home">
    <!-- <el-button type="primary" @click="getreq">发送请求</el-button> -->
    <el-container>
      <el-header class="eltitle">
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue"
import Main from "@/components/main/main.vue"

@Component({
  components: {
    Header,
    Main
  },
})

// @Component
export default class Home extends Vue {
  // 初始化数据
  time: string = "";
  person = {
    name: "",
    age: ""
  };
  //生命周期函数钩子
  mounted() {}
  //组件方法
  // 发送请求
  getreq(): void {
    let add = (res: object): void => {
      console.log(res);
    };
    this.$http
      .post("/apis/login", { username: "123", password: "123456" })
      .then(add);
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
