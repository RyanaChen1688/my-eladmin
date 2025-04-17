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

    <my-menu
      v-for="(menu, index) in menuData"
      :key="index"
      :menu="menu"
      :menu-index="`${index + 2}`"
    />


  </el-menu>
</template>
<script>
import { mapState } from 'vuex';
import MyMenu from './MyMenu.vue';

export default {
  components: { MyMenu },
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
