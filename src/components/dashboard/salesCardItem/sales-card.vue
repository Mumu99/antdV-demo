<template>
  <section>
    <a-card
      :loading="loading"
      class="sales-card"
      :bordered="false"
    >
      <a-tabs @change="salesChange">
        <a-tab-pane
          key="销售额"
          tab="销售额"
        >
          <div
            id="salesCharOne"
            style="width: 1100px; height: 330px"
          />
        </a-tab-pane>
        <a-tab-pane
          id="salesCharTwo"
          key="访问量"
          tab="访问量"
          style="width: 1100px; height: 330px"
        />
        <a-range-picker
          slot="tabBarExtraContent"
          @change="onChange"
        >
          <a-icon
            slot="suffixIcon"
            type="calendar"
          />
        </a-range-picker>
      </a-tabs>
      <SalesList :label="label" />
    </a-card>
  </section>
</template>

<script>
import echarts from 'echarts'
import SalesList from './sales-list'
export default {
  name: 'SalesCard',
  components: {
    // 注册组件
    SalesList
  },
  data() {
    return {
      loading: true,
      label: '销售额'
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      this.$nextTick(() => {
        this.setEcharts()
      })
    }, 500)
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    // tabs点击的时候的回调
    salesChange(key) {
      this.label = key
    },
    // echarts
    setEcharts() {
      const salesCharOne = echarts.init(document.getElementById('salesCharOne'))
      const salesCharTwo = echarts.init(document.getElementById('salesCharTwo'))
      salesCharOne.setOption({
        title: {
          text: '销售趋势',
          subtext: 'Sales trend'
        },
        color: ['#58afff'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: 'rgba(255,255,255,.9)',
          extraCssText:
            'box-shadow: 0 0 4px #999; width:120px;height:40px; text-align: center; line-height: 30px; font-size: 12px',
          textStyle: {
            color: '#000'
          },
          formatter: function(params) {
            var result = ''
            params.forEach(function(item) {
              const dotHtml =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#1197b8"></span>'
              result +=
                dotHtml +
                ' ' +
                item.name +
                '&nbsp; &nbsp; &nbsp;' +
                item.value +
                '</br>'
            })
            return result
          }
        },
        grid: {
          left: '1%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} 件'
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '50%',
            data: [
              447,
              988,
              582,
              519,
              522,
              1013,
              1220,
              500,
              922,
              300,
              800,
              1291
            ]
          }
        ]
      })
      salesCharTwo.setOption({
        title: {
          text: '访问量趋势',
          subtext: 'Visits trend'
        },
        color: ['#b68fec'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: 'rgba(255,255,255,.9)',
          extraCssText:
            'box-shadow: 0 0 4px #999; width:100px;height:50px; text-align: center; line-height: 40px; font-size: 12px',
          textStyle: {
            color: '#000'
          },
          formatter: function(params) {
            var result = ''
            params.forEach(function(item) {
              const dotHtml =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#b68fec"></span>'
              result +=
                dotHtml +
                ' ' +
                item.name +
                '&nbsp; &nbsp; &nbsp;' +
                item.value +
                '</br>'
            })
            return result
          }
        },
        grid: {
          left: '1%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} 人数'
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '50%',
            data: [
              447,
              988,
              582,
              519,
              522,
              1013,
              1220,
              500,
              922,
              300,
              800,
              1291
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
</style>

