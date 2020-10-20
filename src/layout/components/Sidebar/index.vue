<template>
  <div class="sidebar">
    <div>
      <a-menu
        mode="inline"
        :inline-collapsed="collapsed"
        @click="handleClick"
      >
        <a-sub-menu key="1">
          <span slot="title">
            <a-icon type="dashboard" /><span>Dashboard</span>
          </span>
          <a-menu-item key="dashboard/analysis">
            分析页
          </a-menu-item>
          <a-menu-item key="dashboard/monitor">
            监控页
          </a-menu-item>
          <a-menu-item key="dashboard/workplace">
            工作台
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="form">
          <a-icon type="form" />
          <span>表单</span>
        </a-menu-item>
        <a-menu-item key="table">
          <a-icon type="table" />
          <span>表格</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="ordered-list" /><span>列表页</span>
          </span>
          <a-menu-item key="list/articles">
            文档
          </a-menu-item>
          <a-menu-item key="list/projects">
            项目
          </a-menu-item>
          <a-menu-item key="list/applications">
            应用
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="profile" /><span>详情页</span>
          </span>
          <a-menu-item key="profile/basic">
            基础详情页
          </a-menu-item>
          <a-menu-item key="profile/advanced">
            高级详情页
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="check-circle" /><span>结果页</span>
          </span>
          <a-menu-item key="result/success">
            成功
          </a-menu-item>
          <a-menu-item key="result/error">
            失败
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="user" /><span>个人页</span>
          </span>
          <a-menu-item key="account/center">
            个人中心
          </a-menu-item>
          <a-menu-item key="account/settings">
            个人设置
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <span slot="title">
            <a-icon type="appstore" /><span>异常页</span>
          </span>
          <a-menu-item key="exception/404">
            404
          </a-menu-item>
          <a-menu-item key="exception/500">
            500
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  mounted() {
    this.$bus.$on('collBool', arg => {
      this.collapsed = arg
    })
  },
  methods: {
    handleClick(item) {
      if (this.$route.path.indexOf('/' + item.key) !== -1) return
      this.$router.push({ path: '/' + item.key })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
