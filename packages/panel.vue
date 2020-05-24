<template>
  <!-- panel组件 -->
  <section :class="[panelObj, panel]">
    <!-- 标题 -->
    <h2 v-if="titleShow">{{ title }}</h2>
    <!-- 内容 -->
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'panel',
  data() {
    return {
      // 设置基础样式，后面自己添加类名才可以改,实验了，不用添加这个也可以改
      panelObj: 'panel'
    }
  },
  props: {
    // 标题
    title: {
      type: [String, Number],
      default: '标题'
    },
    // 自定义类
    panel: {
      type: String,
      default: ''
    },
    // 是否有标题
    titleShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './css/element.scss';
.panel {
  @include panel;
}
</style>
