<template>
  <div>
    <div class="header">
      <div class="leftHeader">
        <div style="cursor: pointer;">
          <i v-if="isCollapsed" class="el-icon-s-fold" @click="setCollapse(false)"></i>
          <i v-else class="el-icon-s-unfold" @click="setCollapse(true)"></i>
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>系统监控</el-breadcrumb-item>
          <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="rightHeader">
        <svg-icon icon-class="search" @click="showSearch" style="cursor: pointer;"></svg-icon>
        <el-input v-if="isSearched" ref="refSearch" @blur="setIsSearch(false)" autofocus/>
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
import { mapMutations, mapState } from "vuex";
import SvgIcon from "../SvgIcon.vue";
import MyMenuTags from "./MyMenuTags.vue";
export default {
  name: "MyHeader",
  components: {
    MyMenuTags,
    SvgIcon,
  },
  created() {
    console.log(this)
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState("layout", ["isCollapsed", "isSearched"])
  },
  methods: {
    ...mapMutations("layout", ["setCollapse", "setIsSearch"]),
    showSearch() {
      // 这里的 isSearched 属性控制了el-input的显示隐藏
      // 操作这个变量的值会导致输入框重新渲染，重新渲染是异步的
      this.setIsSearch(true)
      // 这下面的代码会在组件还没有渲染完成时就执行
      // 所以有可能取不到el-input的ref值
      this.$nextTick(()=>{
        console.log(this.$refs.refSearch)
        this.$refs.refSearch.focus();
      })
    }
  }
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