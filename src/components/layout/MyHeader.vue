<template>
  <div>
    <div class="header">
      <div class="leftHeader">
        <div
          @click="changeCollapse"
          class="pointer"
          style="margin: 0 10px 0 10px"
        >
          <i v-if="isCollapse" class="el-icon-s-unfold"></i>
          <i v-else class="el-icon-s-fold"></i>
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in breadCrumb"
            :key="index"
            >{{ item }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="rightHeader">
        <svg-icon
          icon-class="search"
          @click="isInput"
          class="pointer"
        ></svg-icon>
        <el-input
          class="underline-input"
          placeholder="Search"
          ref="refInput"
          v-if="isSearch"
          @blur="isSearch = !isSearch"
        ></el-input>
        <el-tooltip
          class="item"
          effect="dark"
          content="项目文档"
          placement="bottom"
        >
          <svg-icon icon-class="doc" @click="toDoc"></svg-icon>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="全屏缩放"
          placement="bottom"
          v-if="!isFullScreen"
        >
          <svg-icon
            icon-class="fullscreen"
            @click="toggleFullScreen"
          ></svg-icon>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="全屏缩放"
          placement="bottom"
          v-else
          @click="toggleFullScreen"
        >
          <svg-icon icon-class="exit-fullscreen"></svg-icon>
        </el-tooltip>
        <el-dropdown trigger="click" @command="handleCommand">
          <el-tooltip
            class="item"
            effect="dark"
            content="布局设置"
            placement="bottom"
          >
            <svg-icon icon-class="size"></svg-icon>
          </el-tooltip>
          <el-dropdown-menu>
            <el-dropdown-item :disabled="current === 'a'" command="a"
              >Default</el-dropdown-item
            >
            <el-dropdown-item :disabled="current === 'b'" command="b"
              >Medium</el-dropdown-item
            >
            <el-dropdown-item :disabled="current === 'c'" command="c"
              >Small</el-dropdown-item
            >
            <el-dropdown-item :disabled="current === 'd'" command="d"
              >Mini</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" style="width: 88px" class="pointer">
          <span>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>布局设置</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
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
  data() {
    return {
      isSearch: false,
      isFullScreen: false,
      current: "a",
    };
  },
  methods: {
    ...mapMutations("layout", ["changeCollapse"]),
    isInput() {
      this.isSearch = !this.isSearch;
      this.$nextTick(() => {
        this.$refs.refInput.focus();
      });
    },
    toDoc() {
      location.href = "https://eladmin.vip/pages/010101/";
    },
    toggleFullScreen() {
      const doc = window.document;
      console.log(window);
      const docEl = doc.documentElement;

      if (!this.isFullscreen) {
        // 进入全屏
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
          docEl.mozRequestFullScreen();
        } else if (docEl.webkitRequestFullscreen) {
          docEl.webkitRequestFullscreen();
        } else if (docEl.msRequestFullscreen) {
          docEl.msRequestFullscreen();
        }
      } else {
        // 退出全屏
        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
      }

      this.isFullscreen = !this.isFullscreen;
    },
    handleCommand(command) {
      this.current = command;
      this.$message({
        showClose: true,
        message: "布局设置成功！",
        type: "success",
      });
    },
  },
  computed: {
    ...mapState("layout", ["isCollapse", "breadCrumb"]),
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
.underline-input {
  width: 210px;
  margin-left: 5px;
  margin-right: 5px;
}
.el-tooltip {
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.pointer {
  cursor: pointer;
}
</style>