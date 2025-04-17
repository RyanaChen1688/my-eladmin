<template>
  <svg class="svg-icon" aria-hidden="true" @click="emitClick">
    <use :href="iconName"></use>
    <!-- 使用 href 替代 xlink:href -->
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
  methods: {
    emitClick() {
      // 通知父组件。我被点击了，向父组件发送一个xxx的事件，父组件可以处理xxx事件
      this.$emit("click")
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>