<template>
  <div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "MyDashboard",
  components: {
    // MyMenu,
  },
  data() {
    return {
      menuData: null,
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
  created() {
    this.getInfo();
    this.getMenu();
  },
};
</script>
<style scoped>
</style>