<template>
  <el-submenu
    v-if="menu.children && menu.children.length > 0"
    :key="menuIndex"
    :index="`${menuIndex}`"
  >
    <template slot="title">
      <svg-icon :icon-class="menu.meta.icon" />
      <span>{{ menu.meta.title }}</span>
    </template>
    <el-menu-item-group>
      <!-- 递归渲染子菜单 -->
      <my-menu
        v-for="(child, idx) in menu.children"
        :key="idx"
        :menu="child"
        :menu-index="`${menuIndex}-${idx + 1}`"
      />
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item v-else :index="menuIndex">
    <router-link :to="{name:menu.name}">
      <svg-icon :icon-class="menu.meta.icon" />
      <span>{{ menu.meta.title }}</span>
    </router-link>
  </el-menu-item>
</template>

<script>
export default {
  name: "MyMenu",
  props: {
    menu: {
      type: Object,
      required: true,
    },
    menuIndex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>