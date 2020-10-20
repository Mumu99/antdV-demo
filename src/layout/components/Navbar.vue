<template>
  <div class="container">
    <a-layout-header>
      <div class="top">
        <router-link to="/dashboard/analysis">
          <div class="logo">
            <div class="custom-icons-list">
              <Logo />
              <h1>Microsoft</h1>
            </div>
          </div>
        </router-link>
        <div class="right-content">
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>使用文档</span>
            </template>
            <a-icon
              type="question"
              class="quest"
              style="fontSize: 18px; padding: 15px 0;"
            />
          </a-tooltip>
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>{{ count ? count > 99 ? '共有99+条消息未读' : `共有${count}条消息未读` : '全部已读' }}</span>
            </template>
            <a-icon
              type="message"
              :class="{info: count}"
              style="fontSize: 18px; padding: 15px 0;"
            />
          </a-tooltip>
          <!-- 头像 -->
          <template>
            <a-dropdown>
              <a class="ant-dropdown-link">
                <img
                  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                  class="user-avatar"
                >
                <span>
                  {{ title }}
                </span>
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <router-link to="/account/center">
                    个人中心
                  </router-link>
                </a-menu-item>
                <a-menu-item key="1">
                  <router-link to="/account/settings">
                    个人设置
                  </router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item
                  key="3"
                  @click="loginOut"
                >
                  退出登录
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </template>
        </div>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import Logo from './Icon'
export default {
  name: 'Navbar',
  components: {
    // 注册组件
    Logo
  },
  data() {
    return {
      title: localStorage.getItem('userName') || '木木大人',
      count: 100
    }
  },
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e)
    },
    handleMenuClick(e) {
      console.log('click', e)
    },
    loginOut() {
      window.localStorage.removeItem('antdV')
      this.$message.success('退出成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" ra="stylesheet/less" scoped>
.container {
  height: 48px;
  .top {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    .custom-icons-list {
      height: 48px;
      display: flex;
      align-items: center;
      h1 {
        height: 32px;
        margin: 0 0 0 12px;
        font-weight: 600;
        color: #fff;
        font-size: 18px;
        line-height: 32px;
      }
    }
    .right-content {
      color: #fff;
      height: 48px;
      display: flex;
      align-items: center;
      .info {
        position: relative;
        cursor: pointer;
        &::after {
          position: absolute;
          top: 10px;
          right: -5px;
          content: '';
          font-size: 12px;
          width: 8px;
          height: 8px;
          background-color: #f00;
          border-radius: 20px;
          font-weight: bold;
        }
      }
      .quest {
        cursor: pointer;
      }
      .anticon {
        margin-right: 30px;
      }
      .ant-dropdown-link {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        & span {
          margin-left: 10px;
        }
      }
      .user-avatar {
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 10px;
      }
    }
  }
}
</style>
