<template lang="">
    <div>
        <div>测试专用</div>
        <div>姓名：{{name}}</div>
        <div>年龄：{{age}}</div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MyTest",
  computed: {
    ...mapState(["name", "age"]),
  },
};
</script>
<style scoped>
</style>