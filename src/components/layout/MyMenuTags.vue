<template>
  <div class="tagsGroup">
    <el-tag
      v-for="(tag, index) in tagsArr"
      :key="index"
      :closable="index === 0 ? false : true"
      type="info"
      effect="plain"
      :class="index === targetIndex ? 'activeTag' : ''"
      @click="changeTag(tag)"
      @close="closeTag(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "MyMenuTags",
  computed: {
    ...mapState("layout", ["tagsArr", "currentTitle"]),
    targetIndex() {
      return this.tagsArr.indexOf(this.currentTitle);
    },
  },
  methods: {
    ...mapMutations("layout", ["changeCurrentTitle", "closeTag"]),
    changeTag(val) {
      this.changeCurrentTitle(val);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.tagsGroup {
  height: 40px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.el-tag {
  margin: 4px;
  cursor: pointer;
}
.activeTag {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
::v-deep .activeTag .el-tag__close {
  color: #fff !important;
}
</style>