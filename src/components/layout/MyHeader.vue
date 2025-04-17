<template>
  <div>
    <div class="header">
      <div class="leftHeader">
        <div>
          <i class="el-icon-s-fold"></i>
          <i class="el-icon-s-unfold"></i>
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>系统监控</el-breadcrumb-item>
          <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="rightHeader">
        <svg-icon icon-class="search"></svg-icon>
        <el-input></el-input>
        <el-tooltip
          class="item"
          effect="dark"
          content="项目文档"
          placement="bottom"
        >
          <svg-icon icon-class="doc"></svg-icon>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="全屏缩放"
          placement="bottom"
        >
          <svg-icon icon-class="fullscreen"></svg-icon>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="全屏缩放"
          placement="bottom"
        >
          <svg-icon icon-class="exit-fullscreen"></svg-icon>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="布局设置"
          placement="bottom"
        >
          <svg-icon icon-class="size"></svg-icon>
        </el-tooltip>
        <el-dropdown trigger="click" style="width: 88px">
          <span>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>布局设置</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <my-menu-tags />
  </div>
</template>

<script>
import SvgIcon from "../SvgIcon.vue";
import MyMenuTags from "./MyMenuTags.vue";
export default {
  name: "MyHeader",
  components: {
    MyMenuTags,
    SvgIcon,
  },
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  height: 50px;
}
.leftHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}
.rightHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
}
.el-tooltip {
  margin-right: 10px;
}
</style>