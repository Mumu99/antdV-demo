<template>
  <div class="sales-pie">
    <div
      id="Pie"
      style="width: 100%; height: 248px"
      :style="cgValue === 'a' ? '' : 'width: 0; height: 0; visibility: hidden;'"
    />
    <div
      v-if="cgValue === 'b'"
      id="PieT"
      style="width: 100%; height: 248px"
      :style="cgValue === 'b' ? '' : 'width: 0; height: 0; visibility: hidden;'"
    />
    <div
      v-if="cgValue === 'c'"
      id="PieS"
      style="width: 100%; height: 248px"
      :style="cgValue === 'c' ? '' : 'width: 0; height: 0; visibility: hidden;'"
    />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'SalesPie',
  components: {
    // 注册组件
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    changeValue: String
  },
  data() {
    return {
      title: 0,
      cgValue: ''
    }
  },
  watch: {
    changeValue: function(newVal, old) {
      this.cgValue = newVal
      this.$nextTick(() => {
        if (this.cgValue === 'a') {
          this.setEcharts()
        } else if (this.cgValue === 'b') {
          this.setEchartsT()
        } else {
          this.setEchartsS()
        }
      })
    }
  },
  mounted() {
    this.cgValue = this.changeValue
    this.$nextTick(() => {
      if (this.cgValue === 'a') {
        this.setEcharts()
      } else if (this.cgValue === 'b') {
        this.setEchartsT()
      } else {
        this.setEchartsS()
      }
    })
  },
  methods: {
    setEcharts() {
      const Pie = echarts.init(document.getElementById('Pie'))
      const option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(255,255,255,.9)',
          extraCssText:
            'box-shadow: 0 0 4px #999; width:130px;height:40px; text-align: center; line-height: 30px; font-size: 12px',
          textStyle: {
            color: '#000'
          },
          formatter: function(params) {
            params = [params]
            var result = ''
            params.forEach(function(item) {
              const dotHtml =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#1197b8"></span>'
              result +=
                dotHtml +
                ' ' +
                item.name +
                '&nbsp; &nbsp; &nbsp;' +
                item.percent +
                '%' +
                '</br>'
            })
            return result
          }
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '20%',
          itemHeight: 8,
          itemWidth: 8,
          data: [
            {
              name: '家用电器',
              icon: 'circle'
            },
            {
              name: '日常用品',
              icon: 'circle'
            },
            {
              name: '食用酒水',
              icon: 'circle'
            },
            {
              name: '个护健康',
              icon: 'circle'
            },
            {
              name: '服饰箱包',
              icon: 'circle'
            },
            {
              name: '母婴产品',
              icon: 'circle'
            },
            {
              name: '其他',
              icon: 'circle'
            }
          ],
          textStyle: {
            width: 100
          }
        },
        formatter: function(name) {
          var data = option.series[0].data // 获取series中的data
          var total = 0
          var tarValue
          for (var i = 0, l = data.length; i < l; i++) {
            total += data[i].value
            if (data[i].name === name) {
              tarValue = data[i].value
            }
          }
          var p = (tarValue / total) * 100
          const num = p.toFixed(2).length === 5 ? '     ' : '       '
          const nameNum = name.length === 4 ? '    ' : '           '
          return name + nameNum + p.toFixed(2) + '%' + num + '￥' + tarValue
        },
        graphic: {
          type: 'text',
          left: '26.8%',
          top: '44%',
          style: {
            text: '销售额',
            textAlign: 'center',
            fill: '#ababab',
            fontSize: 14
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 56, name: '家用电器' },
              { value: 31, name: '日常用品' },
              { value: 213, name: '食用酒水' },
              { value: 123, name: '个护健康' },
              { value: 72, name: '服饰箱包' },
              { value: 73, name: '母婴产品' },
              { value: 82, name: '其他' }
            ]
          }
        ],
        title: {
          text: '￥520,1314',
          left: '23%',
          top: '55%',
          textStyle: {
            color: '#000',
            fontSize: 18,
            align: 'center',
            fontWeight: '500'
          }
        }
      }
      Pie.setOption(option)
    },
    setEchartsT() {
      const Pie = echarts.init(document.getElementById('PieT'))
      const option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(255,255,255,.9)',
          extraCssText:
            'box-shadow: 0 0 4px #999; width:130px;height:40px; text-align: center; line-height: 30px; font-size: 12px',
          textStyle: {
            color: '#000'
          },
          formatter: function(params) {
            params = [params]
            var result = ''
            params.forEach(function(item) {
              const dotHtml =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#1197b8"></span>'
              result +=
                dotHtml +
                ' ' +
                item.name +
                '&nbsp; &nbsp; &nbsp;' +
                item.percent +
                '%' +
                '</br>'
            })
            return result
          }
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '20%',
          itemHeight: 8,
          itemWidth: 8,
          data: [
            {
              name: '家用电器',
              icon: 'circle'
            },
            {
              name: '日常用品',
              icon: 'circle'
            },
            {
              name: '食用酒水',
              icon: 'circle'
            },
            {
              name: '个护健康',
              icon: 'circle'
            },
            {
              name: '服饰箱包',
              icon: 'circle'
            },
            {
              name: '母婴产品',
              icon: 'circle'
            },
            {
              name: '其他',
              icon: 'circle'
            }
          ],
          textStyle: {
            width: 100
          }
        },
        formatter: function(name) {
          var data = option.series[0].data // 获取series中的data
          var total = 0
          var tarValue
          for (var i = 0, l = data.length; i < l; i++) {
            total += data[i].value
            if (data[i].name === name) {
              tarValue = data[i].value
            }
          }
          var p = (tarValue / total) * 100
          const num = p.toFixed(2).length === 5 ? '     ' : '       '
          const nameNum = name.length === 4 ? '    ' : '           '
          return name + nameNum + p.toFixed(2) + '%' + num + '￥' + tarValue
        },
        graphic: {
          type: 'text',
          left: '26.8%',
          top: '44%',
          style: {
            text: '销售额',
            textAlign: 'center',
            fill: '#ababab',
            fontSize: 14
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 133, name: '家用电器' },
              { value: 12, name: '日常用品' },
              { value: 32, name: '食用酒水' },
              { value: 123, name: '个护健康' },
              { value: 41, name: '服饰箱包' },
              { value: 412, name: '母婴产品' },
              { value: 22, name: '其他' }
            ]
          }
        ],
        title: {
          text: '￥1,311',
          left: '24.5%',
          top: '55%',
          textStyle: {
            color: '#000',
            fontSize: 18,
            align: 'center',
            fontWeight: '500'
          }
        }
      }
      Pie.setOption(option)
    },
    setEchartsS() {
      const Pie = echarts.init(document.getElementById('PieS'))
      const option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(255,255,255,.9)',
          extraCssText:
            'box-shadow: 0 0 4px #999; width:130px;height:40px; text-align: center; line-height: 30px; font-size: 12px',
          textStyle: {
            color: '#000'
          },
          formatter: function(params) {
            params = [params]
            var result = ''
            params.forEach(function(item) {
              const dotHtml =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:5px;height:5px;background-color:#1197b8"></span>'
              result +=
                dotHtml +
                ' ' +
                item.name +
                '&nbsp; &nbsp; &nbsp;' +
                item.percent +
                '%' +
                '</br>'
            })
            return result
          }
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '20%',
          itemHeight: 8,
          itemWidth: 8,
          data: [
            {
              name: '家用电器',
              icon: 'circle'
            },
            {
              name: '食用酒水',
              icon: 'circle'
            },
            {
              name: '个护健康',
              icon: 'circle'
            },
            {
              name: '服饰箱包',
              icon: 'circle'
            },
            {
              name: '其他',
              icon: 'circle'
            }
          ],
          textStyle: {
            width: 100
          }
        },
        formatter: function(name) {
          var data = option.series[0].data // 获取series中的data
          var total = 0
          var tarValue
          for (var i = 0, l = data.length; i < l; i++) {
            total += data[i].value
            if (data[i].name === name) {
              tarValue = data[i].value
            }
          }
          var p = (tarValue / total) * 100
          const num = p.toFixed(2).length === 5 ? '     ' : '       '
          const nameNum = name.length === 4 ? '    ' : '           '
          return name + nameNum + p.toFixed(2) + '%' + num + '￥' + tarValue
        },
        graphic: {
          type: 'text',
          left: '26.8%',
          top: '44%',
          style: {
            text: '销售额',
            textAlign: 'center',
            fill: '#ababab',
            fontSize: 14
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 121, name: '家用电器' },
              { value: 221, name: '食用酒水' },
              { value: 321, name: '个护健康' },
              { value: 212, name: '服饰箱包' },
              { value: 644, name: '其他' }
            ]
          }
        ],
        title: {
          text: '￥291,21',
          left: '24%',
          top: '55%',
          textStyle: {
            color: '#000',
            fontSize: 18,
            align: 'center',
            fontWeight: '500'
          }
        }
      }
      Pie.setOption(option)
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.sales-pie {
  width: 100%;
  padding: 66px 0;
}
</style>

