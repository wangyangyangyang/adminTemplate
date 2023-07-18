<template>
  <div class="right_content_overflow">
    <el-card class="card-box">
      <div class="content-box">
        <el-table
          :data="tableDataForEventAccount"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            prop="bianhao"
            label="接报事件编号"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="shijian"
            label="接报时间"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="leixing"
            label="接报类型"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="tujing"
            label="途径"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="danwei"
            label="来文单位"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="fangshi"
            label="联系方式"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="ren"
            label="接收人"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="120">
            <template slot-scope="scope">
              <el-button type="primary" @click="doSee">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @current-change="currentPageChange"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'eventAccount',
  data() {
    return {
      tableDataForEventAccount: [
        {
          bianhao: '908883',
          shijian: '2022-2-2 2:2:2',
          leixing: '领导指示',
          tujing: '应急平台',
          danwei: '九江管理局',
          fangshi: '18788889999',
          ren: '卜树',
        }
      ],
    }
  },
  methods: {
    doSee() {

    },
    currentPageChange() {

    },
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  height: 100%;
}
::v-deep .card-box .el-card__body {
  height: 100%;
}
</style>
