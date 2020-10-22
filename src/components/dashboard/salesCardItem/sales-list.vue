<template>
  <div class="sales-list">
    <div class="title">
      门店{{ labelName }}排行
    </div>
    <ul>
      <li
        v-for="(item, index) in salesList"
        :key="index"
      >
        <div class="sales-left">
          <span>{{ item.rank }}</span>
          <p>{{ item.title }}</p>
        </div>
        <div class="sales-right-count">
          <span>
            {{ labelName === '销售额' ? '$' : '' }}
          </span>
          {{ item.count }}
          <span>
            {{ labelName === '销售额' ? '' : '次' }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SalesList',
  components: {
    // 注册组件
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: String
  },
  data() {
    return {
      labelName: '', // 传递的名字
      salesList: [
        {
          rank: 1,
          title: '心上路520号店',
          count: '520,1314'
        },
        {
          rank: 2,
          title: '北京西路5号店',
          count: '520,1313'
        },
        {
          rank: 3,
          title: '上海南路2号店',
          count: '520,1312'
        },
        {
          rank: 4,
          title: '南故桥路0号店',
          count: '520,1311'
        },
        {
          rank: 5,
          title: '猪多嘚路1号店',
          count: '520,1310'
        },
        {
          rank: 6,
          title: '猪妈妈路3号店',
          count: '520,1309'
        },
        {
          rank: 7,
          title: '北京东路1号店',
          count: '520,1308'
        },
        {
          rank: 8,
          title: '心上路520号店',
          count: '520,1314'
        },
        {
          rank: 9,
          title: '北京西路5号店',
          count: '520,1313'
        },
        {
          rank: 10,
          title: '上海南路2号店',
          count: '520,1312'
        },
        {
          rank: 11,
          title: '南故桥路0号店',
          count: '520,1311'
        },
        {
          rank: 12,
          title: '猪多嘚路1号店',
          count: '520,1310'
        },
        {
          rank: 13,
          title: '心上路520号店',
          count: '520,1314'
        },
        {
          rank: 14,
          title: '心上路520号店',
          count: '520,1314'
        }
      ]
    }
  },
  watch: {
    label: function(newVal, old) {
      this.labelName = newVal
    }
  },
  mounted() {
    this.labelName = this.label
  },
  methods: {}
}
</script>

<style lang='less' rel='stylesheet/less'>
.sales-list {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 0;
  height: 339px;
  width: 520px;
  transform: translate3d(0, -40%, 0);
  .title {
    font-size: 16px;
  }
  ul {
    margin-top: 10px;
    padding: 0;
    height: 300px;
    overflow-y: scroll;
    &::-webkit-scrollbar-track-piece {
      background-color: #fff;
      border-radius: 0;
    }
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 50px;
      background-color: #b8b8b8;
      border-radius: 6px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      border: 2px solid #fff;
      -moz-opacity: 0.5;
      -khtml-opacity: 0.5;
      opacity: 0.5;
    }
    &::-webkit-scrollbar-thumb:hover {
      height: 50px;
      background-color: #878987;
      border-radius: 6px;
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 10px 45px 10px 0;
      .sales-left {
        display: flex;
        span {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 22px;
        }
        & p {
          margin-left: 20px;
        }
      }
      &:nth-child(-n + 3) .sales-left span {
        background-color: #314659;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 20px;
      }
    }
  }
}
</style>

