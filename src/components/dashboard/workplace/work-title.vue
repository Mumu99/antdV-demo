<template>
  <div class="work-title">
    <div class="title">
      工作台
    </div>
    <div class="title-main">
      <div class="title-main-left">
        <div class="title-avatar">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            alt=""
            width="72px"
            height="72px"
          >
        </div>
        <div class="title-avatar-info">
          <div class="info-title">
            早安
            <span class="info-title-name">{{ infoTitleName }}</span>
            祝你开心每一天!
          </div>
          <div class="info-desc">
            <span>
              猪多嘚 | 猪窝 - 云开发平台 - 前端技术部 - UED
            </span>
          </div>
        </div>
      </div>
      <div class="title-main-right">
        <div>
          <h4>项目数</h4>
          <span>56</span>
        </div>
        <div>
          <h4>团队内排名</h4>
          <span>1 / 24</span>
        </div>
        <div>
          <h4>项目访问</h4>
          <span>520,131,4</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesCardFooter',
  components: {
    // 注册组件
  },
  data() {
    return {
      infoTitleName: localStorage.getItem('userName'),
      time: ''
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.work-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  .title {
    font-size: 18px;
    font-weight: 600;
  }
  .title-main {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-main-left {
      display: flex;
      align-items: center;
      .title-avatar-info {
        margin-left: 20px;
        .info-title {
          font-size: 20px;
          margin-bottom: 20px;
          .info-title-name {
            color: #000;
            font-weight: 600;
          }
        }
        .info-desc {
          font-size: 14px;
          color: #ababab;
        }
      }
    }
    .title-main-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      div {
        border-right: 1px solid #ababab;
        padding: 0 20px;
        h4 {
          color: #ababab;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>

