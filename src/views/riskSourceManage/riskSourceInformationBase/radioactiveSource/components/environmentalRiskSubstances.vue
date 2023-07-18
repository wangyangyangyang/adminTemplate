<template>
  <div class="container">
    <el-table
      :data="tableDataForEnviromentSubstancesList"
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
        label="环境风险物质"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="化学品名称"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="CAS号"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物理状态"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物理分类"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="毒性"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="设计贮存量(t)"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="设计方式、位置"
        min-width="120">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'environmentalRiskSubstances',
  data() {
    return {
      tableDataForEnviromentSubstancesList: [],
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
