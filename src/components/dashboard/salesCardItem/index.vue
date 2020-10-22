<template>
  <div class="sales-card-item">
    <SalesCard />
  </div>
</template>

<script>
import SalesCard from './sales-card'
export default {
  name: 'SalesCardItem',
  components: {
    // 注册组件
    SalesCard
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='less' rel='stylesheet/less'>
.sales-card-item {
  margin-top: 20px;
}
</style>

