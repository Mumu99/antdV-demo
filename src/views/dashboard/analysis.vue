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
        <div
          v-if="item.isProp"
          class="proportion"
        >
          <p>{{ item.proporTion.one }}
            <a-icon type="caret-up" />
          </p>
          <p>{{ item.proporTion.two }}
            <a-icon type="caret-down" />
          </p>
        </div>
        <div v-else>
          {{ item.cavas }}
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
  name: 'Analysis',
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
          cavas: 'ca',
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
          cavas: 'ca',
          daySales: '转化率 60%'
        },
        {
          title: '运营活动效果',
          count: '98%',
          proporTion: {
            one: '周同比 12%',
            two: '日同比 11%'
          },
          cavas: 'ca',
          isProp: false,
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
      this.topCardList.forEach(item => {
        if (!item.isProp) {
          this.setEcharts()
        }
      })
    }, 500)
  },
  methods: {
    setEcharts() {
      console.log(document.getElementById('chart'))
      const myChar = echarts.init(document.getElementById('chart'))
      myChar.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
      padding-bottom: 30px;
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
    .day-sales {
      font-size: 16px;
      color: #222;
    }
  }
}
</style>

