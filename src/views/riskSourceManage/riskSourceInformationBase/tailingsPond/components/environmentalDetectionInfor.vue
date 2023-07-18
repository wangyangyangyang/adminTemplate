<template>
  <div class="container">
    <el-table
      :data="tableDataForPoint"
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
        label="监测点名称"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="监测点坐标/m"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="监测因子"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="监测时段"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="相对厂址方向"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="相对厂址距离/m"
        min-width="120">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'environmentalDetectionInfor',
  data() {
    return {
      tableDataForPoint: [],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
