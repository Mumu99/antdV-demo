<template>
  <div class="hot-table">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 5 }"
      size="small"
      @change="onChange"
    />
  </div>
</template>

<script>
const columns = [
  {
    title: '排名',
    dataIndex: 'sort'
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword'
  },
  {
    title: '用户数',
    dataIndex: 'perNum',
    sorter: (a, b) => a.perNum - b.perNum
  },
  {
    title: '周涨幅',
    dataIndex: 'week',
    sorter: (a, b) => Number(a.week.slice(0, -1)) - Number(b.week.slice(0, -1))
  }
]
const data = [
  {
    key: '1',
    sort: 1,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '2',
    sort: 2,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '3',
    sort: 3,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '4',
    sort: 4,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '5',
    sort: 5,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '6',
    sort: 6,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '7',
    sort: 7,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '8',
    sort: 8,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '9',
    sort: 0,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '10',
    sort: 10,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '11',
    sort: 11,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '1',
    sort: 1,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '2',
    sort: 2,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '3',
    sort: 3,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '4',
    sort: 4,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '5',
    sort: 5,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '6',
    sort: 6,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '7',
    sort: 7,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '8',
    sort: 8,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '9',
    sort: 0,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '10',
    sort: 10,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '11',
    sort: 11,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '12',
    sort: 12,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '13',
    sort: 13,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '14',
    sort: 14,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '15',
    sort: 15,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '16',
    sort: 16,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '12',
    sort: 12,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '13',
    sort: 13,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '14',
    sort: 14,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '15',
    sort: 15,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '16',
    sort: 16,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '1',
    sort: 1,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '2',
    sort: 2,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '3',
    sort: 3,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '4',
    sort: 4,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '5',
    sort: 5,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '6',
    sort: 6,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '7',
    sort: 7,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '8',
    sort: 8,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '9',
    sort: 0,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '10',
    sort: 10,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '11',
    sort: 11,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '12',
    sort: 12,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  },
  {
    key: '13',
    sort: 13,
    keyword: '猪多嘚',
    perNum: 520,
    week: '52%'
  },
  {
    key: '14',
    sort: 14,
    keyword: '猪猪侠',
    perNum: 519,
    week: '11%'
  },
  {
    key: '15',
    sort: 15,
    keyword: 'GGGood',
    perNum: 518,
    week: '24%'
  },
  {
    key: '16',
    sort: 16,
    keyword: '瑞文',
    perNum: 512,
    week: '2%'
  }
]
export default {
  name: 'HotTable',
  components: {
    // 注册组件
  },
  data() {
    return {
      data,
      columns
    }
  },
  mounted() {},
  methods: {
    onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter)
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less'>
.hot-table {
  margin-top: 20px;
  .ant-table-small {
    border: none;
  }
}
</style>

