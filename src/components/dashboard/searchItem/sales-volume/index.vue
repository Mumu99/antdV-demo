<template>
  <div class="volume">
    <a-card
      :loading="loading"
      class="sales-card"
      :bordered="false"
    >
      热门
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'SearchVolume',
  components: {
    // 注册组件
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      // this.$nextTick(() => {
      //   this.setEcharts()
      // })
    }, 500)
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.volume {
  width: 49.5%;
}
</style>

