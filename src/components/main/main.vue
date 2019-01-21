<template>
  <div style="height:100%;position:relative;">
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
            <el-submenu
              v-for="(item,key) in this.menutree"
              :index="key + ''"
              v-if="item.children.length != 0"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.menuTitle}}</span>
              </template>
              <el-menu-item v-for="(i,k) in item.children" @click="addTab(i)" :index="key + '-' + k">{{i.menuTitle}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="Mright">
      <el-tabs v-model="currectIndex" @tab-click="tabclic" type="card" closable @tab-remove="removeTab" 
               style="position: fixed;top: 50px;width:calc(100% - 200px);z-index:999;background:#fff;">
        <el-tab-pane
          v-for="(item, index) in editableTabs2"
          :key="index"
          :label="item.menuTitle"
          :data-route="item.route"
          :name="(index+1)+''"
        >
        </el-tab-pane>
      </el-tabs>

      <div class="rtwstyl">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {
  menutree: object = {};
  currectIndex: string = "1";
  editableTabs2: any = [
    {
      menuTitle: "首页",
      name: "1",
      route:"home"
    }
  ];
  tabIndex: number = 1;
  navList:any = []
  mounted() {
    this.menutree = [
      {
        menuTitle: "一级菜单",
        menuId: "L0001",
        children: [
          {
            menuTitle: "一级内部菜单--一",
            menuId: "001",
            route:"first"
          },
          {
            menuTitle: "一级内部菜单--二",
            menuId: "002",
            route:"second"
          }
        ]
      },
      {
        menuTitle: "二级菜单",
        menuId: "L0002",
        children: [
          {
            menuTitle: "二级内部菜单--一",
            menuId: "011",
            route:"third"
          },
          {
            menuTitle: "二级内部菜单--二",
            menuId: "012",
            route:"forth"
          }
        ]
      },
      {
        menuTitle: "三级菜单",
        menuId: "L0003",
        children: [
          {
            menuTitle: "001",
            menuId: "031",
            route:"fifth"
          },
          {
            menuTitle: "002",
            menuId: "032",
            route:"sixth"
          }
        ]
      }
    ];
    // let add = (res: object) :void => {
    //     console.log(res)
    // }
    // this.$http.get('/menu.json').then(add)
  }

  addTab(targetName: any) {
    // 给一个标识符 记录是否含有已添加的菜单
    let bool = true
    for(let x in this.editableTabs2){
      if(this.editableTabs2[x].menuId == targetName.menuId){
        bool = false
        this.$router.push({name:targetName.route})
        let aa = Number(x) + 1
        this.currectIndex = aa.toString()
        return false
      }
    }
    if(bool){
      let x:any = document.getElementsByClassName("el-menu-item")
      for(let y in x){
        if(typeof x[y] == "object"){
          if(x[y].innerText == targetName.menuTitle){
            x[y].style.color = "rgb(255,208,75)"
          }
        }
      }

      let newTabName = ++this.tabIndex +'';
      this.editableTabs2.push({
        menuTitle: targetName.menuTitle,
        menuId: targetName.menuId,
        route: targetName.route
      });
      this.currectIndex = this.editableTabs2.length  + "";
      this.navList.push({
        menuTitle: targetName.menuTitle,
        menuId: targetName.menuId,
        route: targetName.route
      })
      this.$router.push({name:targetName.route})
    }
  }

  removeTab(targetName: any) {
    if(targetName < this.currectIndex){
      this.editableTabs2.splice(targetName - 1, 1)
      this.currectIndex = targetName + ""
    }else if(targetName == this.currectIndex){
      if(targetName == this.editableTabs2.length){
        this.editableTabs2.splice(targetName - 1, 1)
        this.currectIndex = this.editableTabs2.length + ""
        this.$router.push({name:this.editableTabs2[this.editableTabs2.length - 1].route})
        let x:any = document.getElementsByClassName("el-menu-item")
        for(let y in x){
          if(typeof x[y] == "object"){
            if(x[y].innerText == this.editableTabs2[this.editableTabs2.length - 1].menuTitle){
              x[y].click()
            }else{
              x[y].style.color = "rgb(255,255,255)"
            }
          }
        }
      }else{
        this.editableTabs2.splice(targetName - 1, 1)
        this.currectIndex = targetName + ""
        this.$router.push({name:this.editableTabs2[targetName - 1].route})
      }
    }else{
      this.editableTabs2.splice(targetName - 1, 1)
      this.currectIndex = targetName - 1 + ""
    }
  }

  tabclic(data:any){
    this.$router.push({name:data["$attrs"]["data-route"]})
    let x:any = document.getElementsByClassName("el-menu-item")
    for(let y in x){
      if(typeof x[y] == "object"){
        if(x[y].innerText == data.label){
          x[y].style.color = "rgb(255,208,75)"
          x[y].click()
        }else{
          x[y].style.color = "rgb(255,255,255)"
        }
      }
    }
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
  position absolute 
  top 60px
}

.el-menu {
  height: 100%;
}

.el-icon-arrow-down, .el-icon-location {
  color: white !important;
}

.el-menu-vertical-demo, .el-menu-item, .el-submenu__title {
  background-color: rgb(56, 146, 208) !important;
}

.Mright-tabs {
  width 100%
  height: 100% !important;
  position: absolute;
  top: 0px;
}
.el-tabs
  width 100%
  position absolute

.rtwstyl
  height calc(100% - 60px)
  margin-left 10px
  overflow-y auto
</style>
