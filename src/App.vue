<template>
  <div id="app">
    <my-layout v-if="$route.name!=='login'"/>
    <router-view v-else></router-view>
    <!-- 动态组件 -->
    <!-- <component :is="comp"/> -->
  </div>
</template>

<script>
import MyLayout from './components/layout/MyLayout.vue';
export default {
  name: "App",
  components: {MyLayout},
  created() {
    console.log(1112,this.$route)
  },
  data() {
    return {
      comp: this.$route.name==='login'?"RouterView":"MyLayout"
    }
  }
};
</script>

<style>
</style>
