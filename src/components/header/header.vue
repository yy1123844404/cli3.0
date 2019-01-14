<template>
    <div style="height:50px;width:100%;line-height:50px;">
        <div class="left">
            <span>LOGO</span>
        </div>
        <div class="right">
            <span>
                XXXX管理平台
            </span>
            <a href="#">退出</a>
            <a href="#">修改密码</a>
            <a href="#">个人信息</a>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="stylus">
.left,.right
  display inline-block

.left
  width 200px
  height 50px
  >span
    float left
    font-size 19px
    font-weight 600
.right
  height 50px
  width calc(100% - 200px)
  background-color rgb(56,146,208)
  >span 
    margin-left 10px
    color white
    float left
    font-size 19px
    font-weight 600
  >a
    float right
    text-decoration none
    color white
    padding-right 20px
    font-size 12px
    
</style>
