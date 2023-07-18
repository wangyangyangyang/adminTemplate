<template>
  <div class="right_content_overflow">
    <el-card class="card-box">
      <div class="content-box">
        <el-form inline :model="searchForm" style="background: #ffffff;">
          <el-form-item label="区县：">
            <el-select v-model="searchForm.county" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件等级：">
            <el-select v-model="searchForm.riskLevel" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
            <el-button type="primary" @click="doExport">导出 &nbsp;|<i class="el-icon-upload2 el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="tableDataForEnvironmentalEventList"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            prop="quhua"
            label="行政区划"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="dengji"
            label="事件等级"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="qiye"
            label="关联企业"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="miaoshu"
            label="事件描述"
            min-width="120">
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
  name: 'environmentalEventsStatistics',
  data() {
    return {
      tableDataForEnvironmentalEventList: [
        {
          quhua: '武宁',
          dengji: '重大',
          qiye: '德兰',
          miaoshu: '德兰化工公司',
        }
      ],
      searchForm: {
        county: '',
        riskLevel: '',
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    }
  },
  methods: {
    doSearch() {

    },
    currentPageChange() {

    },
    doExport() {

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

.el-icon-upload2 {
  vertical-align: middle;
}
.el-icon-search {
  vertical-align: middle;
}
</style>
