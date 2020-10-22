<template>
  <div class="hot">
    <a-card
      :loading="loading"
      title="线上热门搜索"
      class="sales-card"
      :bordered="false"
    >
      <div class="hot-search-content">
        <div class="hot-search-num">
          <div class="title">
            搜索用户数
            <a-tooltip>
              <template slot="title">
                搜索该网站的用户人数
              </template>
              <a-icon
                class="icon-top-card"
                type="info-circle"
              />
            </a-tooltip>
          </div>
          <div class="person-num">
            12,321
            <span>
              17.1
              <a-icon type="caret-up" />
            </span>
          </div>
          <div
            id="personEcharts"
            style="width: 100%; height: 30px"
          />
        </div>
        <div class="hot-search-per-num">
          <div class="title">1
            人均搜索次数
            <a-tooltip>
              <template slot="title">
                该网站的人均搜索次数
              </template>
              <a-icon
                class="icon-top-card"
                type="info-circle"
              />
            </a-tooltip>
          </div>
          <div class="person-num per-num">
            2.7
            <span>
              23.1
              <a-icon type="caret-down" />
            </span>
          </div>
          <div
            id="searchEcharts"
            style="width: 100%; height: 30px"
          />
        </div>
      </div>
      <hotTable />
    </a-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import hotTable from './hot-table'
export default {
  name: 'SearchHotOnline',
  components: {
    // 注册组件
    hotTable
  },
  data() {
    return {
      loading: true
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
    setEcharts() {
      const personEcharts = echarts.init(
        document.getElementById('personEcharts')
      )
      const searchEcharts = echarts.init(
        document.getElementById('searchEcharts')
      )
      personEcharts.setOption({
        color: ['#389cff'],
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
          top: '0%',
          left: '-7%',
          right: '0%',
          bottom: '0%',
          containLabel: false
        },
        xAxis: [
          {
            show: false,
            type: 'category',
            boundartGap: true,
            data: [
              '10.22',
              '10.23',
              '10.24',
              '10.25',
              '10.26',
              '10.27',
              '10.28'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            symbol: 'none',
            smooth: true,
            type: 'line',
            areaStyle: {},
            data: [10, 65, 40, 70, 30, 75, 50]
          }
        ]
      })
      searchEcharts.setOption({
        color: ['#1fbcc5'],
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
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#1fbcc5"></span>'
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
          top: '0%',
          left: '-7%',
          right: '0%',
          bottom: '0%',
          containLabel: false
        },
        xAxis: [
          {
            show: false,
            type: 'category',
            boundartGap: true,
            data: [
              '10.22',
              '10.23',
              '10.24',
              '10.25',
              '10.26',
              '10.27',
              '10.28'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            symbol: 'none',
            smooth: true,
            type: 'bar',
            areaStyle: {},
            data: [10, 65, 40, 70, 30, 75, 50]
          }
        ]
      })
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.hot {
  width: 49.5%;
  .hot-search-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > div {
      width: 49.5%;
      .title {
        color: #ababab;
      }
      .person-num {
        font-size: 18px;
        padding: 10px 0;
        span {
          font-size: 14px;
          color: #ababab;
          margin-left: 25px;
        }
        svg {
          color: #f5353e;
          font-size: 14px;
        }
      }
      .per-num svg {
        color: #54c41d;
        vertical-align: bottom;
      }
    }
  }
}
</style>

