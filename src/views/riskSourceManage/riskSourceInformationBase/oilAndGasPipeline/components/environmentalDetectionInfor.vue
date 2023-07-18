<template>
  <el-card class="card-box">
    <div class="contentItem">
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
       
      </el-table>
    </div>
    <div class="contentItem">
      <el-table
        :data="tableDataForSection"
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
          label="监测断面名称"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="位置"
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
     
      </el-table>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'environmentalDetectionInfor',
  data() {
    return {
      tableDataForPoint: [],
      tableDataForSection: [],
    }
  }
}
</script>

<style lang="scss" scoped>
.contentItem {
  background: #fff;
  padding: 18px;
  overflow: auto;
  margin-bottom: 18px;
}
</style>
