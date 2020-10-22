<template>
  <div class="container">
    <header class="top-card">
      <a-card
        v-for="(item, index) in topCardList"
        :key="index"
        :loading="loading"
        class="card"
        :bordered="false"
      >
        <div class="title">
          <span>{{ item.title }}</span>
          <a-tooltip>
            <template slot="title">
              {{ item.title }}
            </template>
            <a-icon
              class="icon-top-card"
              type="info-circle"
            />
          </a-tooltip>
        </div>
        <div class="money">
          {{ item.count }}
        </div>
        <div v-if="item.isProp">
          <div
            v-if="!item.footer"
            class="proportion"
          >
            <p>{{ item.proporTion.one }}
              <a-icon type="caret-up" />
            </p>
            <p>{{ item.proporTion.two }}
              <a-icon type="caret-down" />
            </p>
          </div>
          <div
            v-else
            class="operate"
          >
            <div class="tb">
              <span />
              <span />
            </div>
            <a-progress
              :stroke-color="{
                from: '#a473e7',
                to: '#13c2c2',
              }"
              :percent="80"
              status="active"
            />
          </div>
        </div>
        <div v-else>
          <div
            :id="item.cavas"
            style="width: 100%; height: 25px"
          />
        </div>
        <a-divider style="margin: 10px 0" />
        <div
          v-if="!item.footer"
          class="day-sales"
        >
          {{ item.daySales }}
        </div>
        <div
          v-else
          class="proportion"
        >
          <p>{{ item.proporTion.one }}
            <a-icon type="caret-up" />
          </p>
          <p>{{ item.proporTion.two }}
            <a-icon type="caret-down" />
          </p>
        </div>
      </a-card>
    </header>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'TopCardItem',
  components: {
    // 注册组件
  },
  data() {
    return {
      loading: true,
      topCardList: [
        {
          title: '总销售额',
          count: '￥520,131,4',
          proporTion: {
            one: '周同比 12%',
            two: '日同比 11%'
          },
          isProp: true,
          footer: false,
          daySales: '日销售额 ￥12,242'
        },
        {
          title: '访问量',
          count: '8,288',
          proporTion: {
            one: '周同比 12%',
            two: '日同比 11%'
          },
          isProp: false,
          footer: false,
          cavas: 'datCa',
          daySales: '日访问量 1,234'
        },
        {
          title: '支付笔数',
          count: '8,213',
          proporTion: {
            one: '周同比 12%',
            two: '日同比 11%'
          },
          isProp: false,
          footer: false,
          cavas: 'payCa',
          daySales: '转化率 60%'
        },
        {
          title: '运营活动效果',
          count: '80%',
          proporTion: {
            one: '周同比 12%',
            two: '日同比 11%'
          },
          cavas: 'operateCa',
          isProp: true,
          footer: true,
          daySales: {
            one: '周同比 12%',
            two: '日同比 11%'
          }
        }
      ]
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
      const datCa = echarts.init(document.getElementById('datCa'))
      const payCa = echarts.init(document.getElementById('payCa'))
      datCa.setOption({
        color: ['#975fe4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '0%',
          left: '-5%',
          right: '0%',
          bottom: '0%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            show: false,
            data: [
              '10.22',
              '10.23',
              '10.24',
              '10.25',
              '10.26',
              '10.27',
              '10.28',
              '10.29',
              '10.30',
              '10.31',
              '11.01',
              '11.02',
              '11.03',
              '11.04',
              '11.05',
              '11.06'
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
            name: '访问人数',
            type: 'line',
            areaStyle: {},
            data: [
              77,
              65,
              60,
              20,
              70,
              75,
              50,
              72,
              90,
              50,
              80,
              30,
              60,
              52,
              20,
              77,
              79
            ]
          }
        ]
      })
      payCa.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '0%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '10.22',
              '10.23',
              '10.24',
              '10.25',
              '10.26',
              '10.27',
              '10.28',
              '10.29',
              '10.30',
              '10.31',
              '11.01',
              '11.02',
              '11.03',
              '11.04',
              '11.05',
              '11.06'
            ],
            show: false,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            smooth: true,
            name: '支付数',
            type: 'bar',
            barWidth: '50%',
            areaStyle: {},
            data: [
              77,
              65,
              60,
              20,
              70,
              75,
              50,
              72,
              90,
              50,
              80,
              30,
              60,
              52,
              20,
              77,
              79
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.top-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .card {
    width: 24%;
    .title {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 16px;
        color: #8c8c8c;
      }
      .icon-top-card {
        cursor: pointer;
      }
    }
    .money {
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 20px;
    }
    .proportion {
      display: flex;
      .anticon {
        svg {
          color: #f00;
          font-size: 10px;
        }
      }
      p:nth-child(2) {
        margin-left: 20px;
        .anticon {
          svg {
            color: green;
            vertical-align: text-top;
          }
        }
      }
    }
    .operate {
      .tb {
        position: relative;
        & span {
          border-radius: 10px;
        }
        & span:nth-child(1) {
          position: absolute;
          width: 3px;
          height: 8px;
          background-color: #13c2c2;
          top: 0;
          left: 80%;
          z-index: 99;
        }
        & span:nth-child(2) {
          position: absolute;
          width: 3px;
          height: 8px;
          background-color: #13c2c2;
          bottom: -23px;
          left: 80%;
          z-index: 99;
        }
      }
    }
    .day-sales {
      font-size: 16px;
      color: #222;
    }
  }
}
</style>

