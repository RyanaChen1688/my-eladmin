<template>
  <el-submenu v-if="hasChildren" :index="menu.meta.title">
    <template slot="title">
      <svg-icon :icon-class="menu.meta.icon" />
      <span>{{ menu.meta.title }}</span>
    </template>
    <menu-item v-for="child in menu.children" :key="child.path" :menu="child" />
  </el-submenu>

  <el-menu-item v-else :index="menu.meta.title">
    <svg-icon :icon-class="menu.meta.icon" />
    <span>{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menu: {
      type: Object,
      required: true,
    },
    basePath: { type: String, default: "" },
  },
  computed: {
    // fullPath() {
    //   const part = this.menu.path || this.menu.component || "";
    //   const cleaned = part.replace(/^\/|\/$/g, ""); // 清除前后斜杠
    //   return this.basePath
    //     ? `${this.basePath}/${cleaned}`.replace(/\/+/g, "/")
    //     : `/${cleaned}`;
    // },
    hasChildren() {
      return this.menu.children && this.menu.children.length > 0;
    },
  },
  components: {
    MenuItem: () => import("./MenuItem.vue"), // 递归引用自身
  },
};
</script>
<style scoped>
.svg-icon {
  margin-right: 16px;
}
</style>