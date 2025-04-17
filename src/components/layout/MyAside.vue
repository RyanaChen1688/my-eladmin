<template>
  <el-menu
    style="height: 100vh"
    default-active="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapsed"
  >
    <el-menu-item index="0">
      <template slot="title">
        <div style="display: flex; align-items: center">
          <img
            src="@/assets/logo.png"
            alt=""
            style="
              width: 32px;
              height: 32px;
              vertical-align: -0.15em;
              fill: currentColor;
              overflow: hidden;
              margin-right: 16px;
            "
          />
          <span>ELADMIN后台管理系统</span>
        </div>
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <template slot="title">
        <svg-icon icon-class="index" />
        <span>首页</span>
      </template>
    </el-menu-item>
    <template v-for="(menu, index) in menuData">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :key="index"
        :index="`${index + 2}`"
      >
        <template slot="title">
          <svg-icon :icon-class="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(item, idx) in menu.children"
            :key="idx"
            :index="`${index + 2}-${idx + 1}`"
          >
            <template slot="title">
              <svg-icon :icon-class="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu v-else :key="index + 1"></el-submenu>
    </template>
  </el-menu>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "MyAside",
  props: ["menuData"],
  created() {
    console.log("子组件收到", this.menuData);
  },
  computed: {
    ...mapState("layout", ["isCollapsed"])
  }
};
</script>
<style scoped>
.svg-icon {
  margin-right: 16px;
}
</style>