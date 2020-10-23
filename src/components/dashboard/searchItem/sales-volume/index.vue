<template>
  <div class="volume">
    <a-card
      :loading="loading"
      title="销售额类别占比"
      :bordered="false"
    >
      <div slot="extra">
        <a-radio-group
          v-model="value"
          @change="onChange"
        >
          <a-radio-button value="a">
            全部渠道
          </a-radio-button>
          <a-radio-button value="b">
            线上
          </a-radio-button>
          <a-radio-button value="c">
            线下
          </a-radio-button>
        </a-radio-group>
      </div>
      <div class="title">
        销售额
      </div>
      <SalesPie :change-value="changeValue" />
    </a-card>
  </div>
</template>

<script>
import SalesPie from './sales-pie'
export default {
  name: 'SearchVolume',
  components: {
    // 注册组件
    SalesPie
  },
  data() {
    return {
      loading: true,
      value: 'a',
      changeValue: 'a'
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  methods: {
    onChange(e) {
      this.changeValue = e.target.value
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.volume {
  width: 49.5%;
  .ant-card-extra {
    padding: 12px 0;
  }
}
</style>

