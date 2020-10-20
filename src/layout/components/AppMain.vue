<template>
  <div class="appmain">
    <div style="padding:10px">
      <a-icon
        style="font-size: 20px; padding: 10px"
        :type="collapsed ? 'pic-left' : 'pic-right'"
        @click="toggleCollapsed"
      />
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  components: {
    // 注册组件
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      this.$bus.$emit('collBool', this.collapsed)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.appmain {
  background-color: #f5f5f5;
}
</style>
