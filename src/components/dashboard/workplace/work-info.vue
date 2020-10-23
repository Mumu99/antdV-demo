<template>
  <div class="work-info">
    <a-card
      :loading="loading"
      class="work-info-card"
      title="进行中的项目"
      :bordered="false"
    >
      <a
        slot="extra"
        href="#"
      >全部项目</a>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          我大约真的没有什么才华，只是因为有幸见着了你，于是这颗庸常的心中才凭空生出好些浪漫。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          凌晨四点钟，我看见海棠花未眠，总觉得这时你应该在我身边。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          我若是游子，你便是人间。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          世间安得双全法，不负如来不负卿。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          冗长的黑夜里，你是我唯一的光。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:33.33%;">
        <div class="work-card-title">
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
            猪
          </a-avatar>
          <span class="work-card-title-name">秋千水</span>
        </div>
        <div class="work-card-desc">
          于我而言，这世界有两个你，一个在我眼前，一个在我心里。
        </div>
        <div class="work-card-footer">
          <div class="work-card-footer-role">
            美好向往组
          </div>
          <div class="work-card-footer-time">
            2天前
          </div>
        </div>
      </a-card-grid>
    </a-card>
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
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.work-info {
  width: 1113px;
  margin-top: 20px;
  .work-info-card {
    width: 100%;
    .work-card-title {
      width: 100%;
      .work-card-title-name {
        margin-left: 10px;
        color: #000;
      }
    }
    .work-card-desc {
      margin-top: 8px;
      height: 42px;
    }
    .work-card-footer {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

