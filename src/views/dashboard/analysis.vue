<template>
  <div class="container">
    <TopCard />
    <SalesCardItem />
    <Search />
    <SalesCardFooter />
  </div>
</template>

<script>
import TopCard from '@/components/dashboard/topCardItem'
import SalesCardItem from '@/components/dashboard/salesCardItem/index'
import Search from '@/components/dashboard/searchItem/index'
import SalesCardFooter from '@/components/dashboard/footer'
export default {
  name: 'Analysis',
  components: {
    // 注册组件
    TopCard,
    SalesCardItem,
    Search,
    SalesCardFooter
  },
  data() {
    return {}
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.analys-footer {
  width: 100%;
  margin-top: 60px;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    a {
      color: rgba(0, 0, 0, 0.45);
      margin-left: 30px;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>

