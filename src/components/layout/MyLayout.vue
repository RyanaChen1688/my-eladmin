<template>
  <el-row style="">
    <el-col :span="6" style="height: 100vh;border: solid red 1px;">
      <!-- 侧边菜单 -->
      <my-aside :menuData="menuData"/>
    </el-col>
    <el-col :span="18" style="height: 100vh;border: solid blue 1px;">
      <!-- 头部 -->
      <my-header />
      <!-- 路由出口 -->
       <router-view></router-view>
       <!-- 底部 -->
       <my-footer/>
    </el-col>
  </el-row>
</template>

<script>
import MyAside from './MyAside.vue'
import MyFooter from './MyFooter.vue'
import MyHeader from './MyHeader.vue'
import request from "@/utils/request"
export default {
  components: { MyAside, MyHeader, MyFooter },
  created() {
    this.getInfo()
    this.getMenu()
  },
  data() {
    return {
      userData: {},
      menuData: [],
    }
  },
  methods: {
    async getInfo() {
      try {
        const res = await request.get("/api/auth/info");
        console.log("$$$info", res);
        this.userData = res
      } catch (err) {
        console.error(err);
      }
    },
    async getMenu() {
      try {
        const res = await request.get("/api/api/menus/build");
        console.log("@@@menu", res);
        this.menuData = [...res];
      } catch (err) {
        console.error(err);
      }
    },
  }
}
</script>

<style>

</style>