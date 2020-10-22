<template>
  <footer class="analys-footer">
    请使用
    <a-icon type="chrome" />内核的浏览器进行浏览, 才能得到至极的体验
    <div class="title">2020 猪妈妈体验技术部出品
      <a
        href="https://github.com/Mumu99/antdV-demo"
        target="_blank"
      >
        <a-icon type="github" /> Mumu99
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SalesCardFooter',
  components: {
    // 注册组件
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

