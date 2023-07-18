<template>
  <div class="container">
    <el-table
      :data="tableDataForEnviromentFacilitiesList"
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
        label="类型"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="环境风险设施"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="风险因素"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="风险类型"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="风险物质"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="对环境危害"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="最大暂存量(t)"
        min-width="120">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'environmentalRiskFacilities',
  data() {
    return {
      tableDataForEnviromentFacilitiesList: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
