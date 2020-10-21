<template>
  <div class="containerN">
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
          <a-tooltip
            placement="bottom"
            @click="showDrawer"
          >
            <template slot="title">
              <span>使用文档</span>
            </template>
            <a-icon
              type="question-circle"
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
              @click="sModal"
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
                  <span @click="goAccount('/account/center')">个人中心</span>
                </a-menu-item>
                <a-menu-item key="1">
                  <span @click="goAccount('/account/settings')">个人设置</span>
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
    <a-drawer
      title="使用文档"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      width="600px"
      @close="onClose"
    >
      <p>小兔子
        <icon-font type="icontuzi" />坐在树下感叹 好想谈恋爱呀
      </p>
      <p>小熊
        <icon-font type="iconxiongmao" />听见了 问她 你为什么想谈恋爱呢
      </p>
      <p>小熊
        <icon-font type="iconxiongmao" />问 那你喜欢什么样的人呢
      </p>
      <p>小兔子
        <icon-font type="icontuzi" />说
        <icon-font type="iconlaba" /> 温柔 善良 有趣
      </p>
      <p>小熊
        <icon-font type="iconxiongmao" />说
        <icon-font type="iconlaba" /> 具体一点
      </p>
      <p>很大个 怀抱暖暖的 会摸我的头 还冲我笑 会做好吃的胡萝卜
        <icon-font type="iconhuluobu1" />炒饭 还会带我去河里跳舞
      </p>
      <p>小熊
        <icon-font type="iconxiongmao" />说
        <icon-font type="iconlaba" /> 能不能再具体一点
      </p>
      <p>小兔子
        <icon-font type="icontuzi" />说
        <icon-font type="iconlaba" /> 你呀 笨熊熊~
      </p>
      <icon-font
        class="aixin"
        type="iconline_aixin"
      />
    </a-drawer>
    <!-- 消息弹出框 -->
    <a-modal
      v-model="showModal"
      :width="400"
      :cancel-text="tabCount === '1' ? '清空通知' : tabCount === '2' ? '清空消息' : '清空待办'"
      ok-text="查看更多"
      :closable="false"
      ok-type="default"
      dialog-class="modal-show"
      @cancel="closeModal"
      @ok="handleOk"
    >
      <a-tabs
        default-active-key="1"
        @change="callback"
      >
        <!-- 通知 -->
        <a-tab-pane
          key="1"
          :tab="'通知('+ notice.length +')'"
        >
          <a-list
            item-layout="horizontal"
            :data-source="notice"
            :locale="locale"
          >
            <a-list-item
              slot="renderItem"
              slot-scope="item"
              style="padding-left: 20px"
            >
              <a-list-item-meta :description="item.year">
                <span slot="title">
                  {{ item.title }}
                </span>
                <a-avatar
                  slot="avatar"
                  :icon="item.icon"
                  :style="'backgroundColor:'+item.color"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-tab-pane>
        <!-- 消息 -->
        <a-tab-pane
          key="2"
          :tab="'消息('+ news.length +')'"
          force-render
        >
          <a-list
            item-layout="horizontal"
            :data-source="news"
            :locale="locale"
          >
            <a-list-item
              slot="renderItem"
              slot-scope="item"
              style="padding-left: 20px"
            >
              <a-list-item-meta :description="item.desc">
                <span slot="title">
                  {{ item.user }}
                </span>
                <a-avatar
                  slot="avatar"
                  :src="item.icon"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-tab-pane>
        <!-- 待办 -->
        <a-tab-pane
          key="3"
          :tab="'待办('+ agency.length +')'"
        >
          <a-list
            item-layout="horizontal"
            :data-source="agency"
            :locale="locale"
          >
            <a-list-item
              slot="renderItem"
              slot-scope="item"
              style="padding-left: 20px"
            >
              <a-list-item-meta :description="item.desc">
                <span slot="title">
                  {{ item.title }}
                </span>
              </a-list-item-meta>
              <a-tag :color="item.color">
                {{ item.time }}
              </a-tag>
            </a-list-item>
          </a-list>
        </a-tab-pane>
      </a-tabs>
    </a-modal>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
import Logo from './Icon'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2146297_jitrjoxy09t.js'
})
export default {
  name: 'Navbar',
  components: {
    // 注册组件
    Logo,
    IconFont
  },
  data() {
    return {
      title: localStorage.getItem('userName') || '木木大人',
      count: 0,
      visible: false,
      showModal: false,
      notice: [
        {
          title: '支付宝到账1000000万元',
          year: '1个月前',
          icon: 'alipay-circle',
          color: '#fe5d58'
        },
        {
          title: '你推荐的 木木大神 已通过第九轮面试',
          year: '2天前',
          icon: 'google',
          color: '#3391e5'
        },
        {
          title: '猪多嘚请求添加为你好友',
          year: '1小时前',
          icon: 'qq',
          color: '#9ddede'
        },
        {
          title: '中国农业银行',
          year: '1个月前',
          icon: 'bank',
          color: '#ffce3d'
        },
        {
          title: '您有100000条微信消息未读',
          year: '1个月前',
          icon: 'message',
          color: '#fe5d58'
        }
      ], // 通知数量
      news: [
        {
          user: '马云 给你发邮件',
          desc: '来我公司上班',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          year: '1天前'
        },
        {
          user: '马云 回复了你',
          desc: '有没有兴趣把沃尔玛给搞废, 我们开一元体验店',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          year: '1天前'
        },
        {
          user: '马云 邀请你',
          desc: '看到回复一下, 谢谢，我们很希望得到您的帮助',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          year: '1天前'
        }
      ], // 消息数量
      agency: [
        {
          title: '夺取荆州',
          desc:
            '需要调用常山赵子龙, 去攻打荆州, 此时的荆州已是空城一座, 速战速决',
          time: '未开始',
          color: '#888'
        },
        {
          title: '刺杀刘备',
          desc: '命许诸前去, 刺杀刘备刘皇叔, 不得有误',
          time: '进行中',
          color: 'orange'
        },
        {
          title: '迎娶香香',
          desc: '我东吴美女如云, 为何刘皇叔, 偏偏看中我家香香',
          time: '马上到期',
          color: '#ffa39e'
        },
        {
          title: '杀吕布',
          desc:
            '需要采用美人计, 利用貂蝉的美貌, 迷得吕布那厮, 神魂颠倒, 最后用匕首杀之',
          time: '已完成',
          color: '#42b983'
        }
      ], // 待办数量
      tabCount: '1', // 当前点击选项卡
      locale: {
        emptyText: '暂无数据'
      }
    }
  },
  mounted() {
    this.setCount()
  },
  methods: {
    // 退出登录
    loginOut() {
      window.localStorage.removeItem('antdV')
      this.$message.success('退出成功')
      this.$router.push('/login')
    },
    afterVisibleChange(val) {
      console.log('visible', val)
    },
    // 帮助文档的抽屉
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    // 消息的弹窗
    sModal() {
      this.showModal = true
    },
    handleOk() {
      this.$message.info('您点击了 more')
      this.showModal = false
    },
    closeModal(e) {
      if (e.target.className.indexOf('ant-btn') === -1) return
      if (this.tabCount === '1' && this.notice.length > 0) {
        this.$message.success(`您清空了通知`)
      } else if (this.tabCount === '2' && this.news.length > 0) {
        this.$message.success(`您清空了消息`)
      } else if (this.tabCount === '3' && this.agency.length > 0) {
        this.$message.success(`您清空了待办`)
      } else {
        this.$message.info('无需清空')
      }
      if (this.tabCount === '1') {
        this.notice = []
      } else if (this.tabCount === '2') {
        this.news = []
      } else {
        this.agency = []
      }
      this.setCount()
    },
    // 选项卡的回调
    callback(key) {
      this.tabCount = key
    },
    // 设置相关条数
    setCount() {
      const { notice, news, agency } = this
      this.count = notice.length + news.length + agency.length
    },
    // 分发事件, 跳转路由
    goAccount(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" ra="stylesheet/less">
.containerN {
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
.modal-show .ant-modal-content .ant-modal-body {
  padding: 0 10px;
}
.modal-show .ant-modal-content .ant-modal-footer {
  padding: 0;
  & > div {
    display: flex;
    justify-content: space-around;
    & button {
      border: none;
      width: 50%;
      height: 50px;
      border-right: 1px solid #ccc;
      border-radius: 0;
    }
  }
}
.ant-tabs-content {
  padding-bottom: 10px;
}
.ant-tabs-nav-scroll {
  display: flex;
  justify-content: center;
}
</style>
