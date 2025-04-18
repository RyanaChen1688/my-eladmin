<template>
  <div>
    <el-col :span="isCollapse ? 1 : 4">
      <my-aside :menuData="menuData" />
    </el-col>
    <el-col :span="isCollapse ? 23 : 20">
      <my-header />
      <router-view></router-view>
      <my-footer />
    </el-col>
  </div>
</template>
<script>
import request from "@/utils/request";
import MyAside from "@/components/layout/MyAside.vue";
import MyFooter from "@/components/layout/MyFooter.vue";
import MyHeader from "@/components/layout/MyHeader.vue";
import { mapState } from "vuex";

export default {
  name: "MyLayOut",
  components: { MyAside, MyHeader, MyFooter },
  data() {
    return {
      menuData: [],
      userInfo: {},
    };
  },
  methods: {
    async getInfo() {
      try {
        const res = await request.get("/api/auth/info");
        console.log("$$$info", res);
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
  },
  computed: {
    ...mapState("layout", ["isCollapse"]),
  },
  created() {
    this.getInfo();
    this.getMenu();
  },
};
</script>
<style >
</style>