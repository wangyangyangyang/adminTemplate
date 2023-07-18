<template>
  <div class="container">
    <el-table
      :data="tableDataForPossibleEventList"
      border
      :header-cell-style="{textAlign: 'center'}"
      :cell-style="{textAlign: 'center'}"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="date"
        label="可能突发性污染事件"
        min-width="140">
      </el-table-column>
      <el-table-column
        prop="name"
        label="可能污染区范围"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="可能涉及到环境风险受体"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所需应急资源"
        min-width="220">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'possibleRiskEvents',
  data() {
    return {
      tableDataForPossibleEventList: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
