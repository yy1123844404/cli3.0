<template>
  <div style="height:100%">
    <div class="Mleft">
      <el-row style="height:100%;">
        <el-col :span="24" style="height:100%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu v-for="(item,key) in this.menutree" :index="key + ''" v-if="item.children.length != 0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.menuTitle}}</span>
              </template>
              <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group> -->
              <el-menu-item v-for="(i,k) in item.children"  :index="key + '-' + k">{{i.menuTitle}}</el-menu-item>
              <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="Mright"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import menu from '../JS/menu.js'

@Component
export default class Main extends Vue {
  menutree: object = {};
  mounted() {
    this.menutree = [
      {
        menuTitle: "一级菜单",
        menuId: "L0001",
        children: [
          {
            menuTitle: "一级内部菜单--一",
            menuId: "001"
          },
          {
            menuTitle: "一级内部菜单--二",
            menuId: "002"
          }
        ]
      },
      {
        menuTitle: "二级菜单",
        menuId: "L0002",
        children: [
          {
            menuTitle: "二级内部菜单--一",
            menuId: "011"
          },
          {
            menuTitle: "二级内部菜单--二",
            menuId: "012"
          }
        ]
      },
      {
        menuTitle: "三级菜单",
        menuId: "L0003",
        children: [
            {
            menuTitle: "001",
            menuId: "011"
          },
          {
            menuTitle: "002",
            menuId: "012"
          }
        ]
      }
    ];
    // let add = (res: object) :void => {
    //     console.log(res)
    // }
    // this.$http.get('/menu.json').then(add)
  }
}
</script>

<style lang="stylus">
.Mleft, .Mright {
  display: inline-block;
  height: 100%;
}

.Mleft {
  width: 200px;
  background-color: rgb(56, 146, 208);
}

.Mright {
  width: calc(100% - 200px);
}

.el-menu {
  height: 100%;
}

.el-icon-arrow-down,.el-icon-location
    color white !important

.el-menu-vertical-demo,.el-menu-item,.el-submenu__title
    background-color: rgb(56, 146, 208) !important

.el-menu-item
    background-color: rgb(56, 146, 208) !important
</style>
