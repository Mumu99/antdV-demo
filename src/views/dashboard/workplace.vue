<template>
  <div class="workplace-all">
    <WorkTitle />
    <WorkInfo />
    <WorkIndex />
    <WorkTeam />
  </div>
</template>

<script>
import WorkTitle from '@/components/dashboard/workplace/work-title'
import WorkInfo from '@/components/dashboard/workplace/work-info'
import WorkIndex from '@/components/dashboard/workplace/work-index'
import WorkTeam from '@/components/dashboard/workplace/work-team'
export default {
  components: {
    // 注册组件
    WorkTitle,
    WorkInfo,
    WorkIndex,
    WorkTeam
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.workplace-all {
  margin-top: 100px;
  overflow: hidden;
}
</style>

