<template>
  <div class="tagsGroup">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: "MyMenuTags",
  data() {
    return {
      tags: [
        { name: "标签一", type: "info" },
        { name: "标签二", type: "info" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "info" },
        { name: "标签五", type: "info" },
      ],
    };
  },
};
</script>
<style scoped>
.tagsGroup {
  height: 36px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.el-tag {
  margin-top: 4px;
  margin-left: 5px;
}
</style>