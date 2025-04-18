<template>
  <el-menu
    ref="menu"
    style="height: 100vh"
    :default-active="currentTitle"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    @select="handleSelect"
    unique-opened
  >
    <el-menu-item index="logo">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        "
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
          :style="{
            width: '32px',
            height: '32px',
            marginRight: isCollapse ? '0' : '16px',
            transition: 'all 0.3s',
          }"
        />
        <span>ELADMIN后台管理系统</span>
      </div>
    </el-menu-item>
    <el-menu-item index="首页">
      <svg-icon icon-class="index" />
      <span>首页</span>
    </el-menu-item>
    <menu-item v-for="menu in menuData" :key="menu.path" :menu="menu" />
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MenuItem from "./MenuItem.vue";
export default {
  name: "MyAside",
  components: { MenuItem },
  props: ["menuData"],
  created() {
    console.log("子组件收到", this.menuData);
  },
  methods: {
    ...mapMutations("layout", [
      "addTagsArr",
      "changeBreadCrumb",
      "changeCurrentTitle",
    ]),
    handleSelect(index, indexPath) {
      console.log("点击了菜单项：", index, indexPath);
      this.addTagsArr(index);
      this.changeBreadCrumb(indexPath);
      this.changeCurrentTitle(index);
    },
    // 递归寻找全路径
    findIndexPath(menuData, target, path = []) {
      for (const item of menuData) {
        const currentPath = [...path, item.meta.title];
        if (item.meta.title === target) {
          return currentPath;
        }
        if (item.children) {
          const result = this.findIndexPath(item.children, target, currentPath);
          if (result.length) return result;
        }
      }
      return [];
    },
    updateActiveIndex(index) {
      this.activeIndex = index;
      this.currentIndexPath = this.findIndexPath(this.menuData, index);
      return this.currentIndexPath;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    ...mapState("layout", ["isCollapse", "currentTitle"]),
  },
  watch: {
    currentTitle(newVal) {
      // console.log(this.updateActiveIndex(newVal));
      this.changeBreadCrumb(this.updateActiveIndex(newVal));
    },
  },
};
</script>
<style scoped>
.svg-icon {
  margin-right: 16px;
}
</style>