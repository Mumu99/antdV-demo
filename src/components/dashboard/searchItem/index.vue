<template>
  <div class="search">
    <Hot />
    <Volume />
  </div>
</template>

<script>
import Hot from './hot-online/index'
import Volume from './sales-volume/index'
export default {
  name: 'SaleVolume',
  components: {
    // 注册组件
    Hot,
    Volume
  },
  data() {
    return {}
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.search {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>

