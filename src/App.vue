<template>
  <div id="app">
    <el-col :span="12">
      <el-menu class="el-menu-vertical-demo" router>
        <el-menu-item index="1"> <span slot="title">导航一</span> </el-menu-item
        ><el-menu-item index="2">
          <span slot="title">导航二</span> </el-menu-item
        ><el-menu-item index="3">
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" :route="{ name: 'test', path: '/test' }">
          <span slot="title">测试页</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>

<style>
</style>
