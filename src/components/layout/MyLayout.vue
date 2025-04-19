<template>
  <div>
    <el-col :span="4">
      <my-aside :menuData="menuData" />
    </el-col>
    <el-col :span="20">
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
    generateRoutes(dataArr) {
      const routes = (dataArr||[]).map((item, idx, arr)=>{
        const newItem = {
          name:item.name,
          path:item.path,
          meta: {
            noCache: item.meta.noCache,
            title: item.meta.title,
          },
          children: this.generateRoutes(item.children),
          component: ()=>import(`@/views/${item.component}`)
        }
        if(newItem.children.length===0) {
          delete newItem.children
        }
        return newItem
      })
      return routes
    },
    async getMenu() {
      try {
        const res = await request.get("/api/api/menus/build");
        console.log("@@@menu", res);
        this.menuData = [...res];
        const routes = this.generateRoutes(res)
        // console.log(JSON.stringify(r outes))
        this.$router.addRoutes(routes);
        console.log(this.$router.getRoutes())
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getInfo();
    this.getMenu();
  },
};
</script>
<style >
</style>