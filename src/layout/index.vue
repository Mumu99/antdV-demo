<template>
  <div class="container1">
    <a-layout>
      <Navbar />
      <div class="content1">
        <Sidebar />
        <AppMain />
      </div>
      <a-layout-footer>
        请使用
        <a-icon type="chrome" />内核的浏览器进行浏览, 才能得到至极的体验
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.container1 {
  height: 100%;
  & > .ant-layout {
    height: 100%;
  }
  .ant-layout-has-sider {
    height: 100%;
  }
  & .sidebar,
  & .appmain {
    height: 100%;
    & .ant-layout-sider {
      height: 100%;
    }
  }
  & .appmain {
    width: 100%;
  }
  .content1 {
    height: 100%;
    display: flex;
    background-color: #fff;
  }
}
.ant-layout-header,
.ant-layout-footer {
  background: #fff;
  color: #000;
  padding: 0 20px !important;
}
.ant-layout-footer {
  text-align: center;
  border-top: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
.ant-layout-sider {
  background: #fff !important;
  color: #000;
  line-height: 120px;
}
</style>
