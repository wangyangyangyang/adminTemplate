<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchForm">
        <el-form-item label="">
          <el-input v-model="searchForm.searchValue" placeholder="实践案例名称"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value1" placeholder="请选择污染物内省">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value2" placeholder="请选择案例类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value3" placeholder="请选择关键字">
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
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div class="content-box">
        <el-table
          :data="tableDataForCase"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            label="序号"
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            label="实践案例名称"
            min-width="320">
          </el-table-column>
          <el-table-column
            prop="yuanying"
            label="事件原因"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="80">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="showDetail(scope.row)">查看</el-button>
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
  name: 'eventCaseBase',
  data() {
    return {
      searchForm: {
        searchValue: '',
        value1: '',
        value2: '',
        value3: '',
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
      tableDataForCase: [
        {
          name: '浙江省温州市鹿城区气体泄漏',
          yuanying: '生产安全事故'
        }
      ]
    }
  },
  methods: {
    doSearch() {

    },
    showDetail(row) {

    },
    currentPageChange() {

    },
  }
}
</script>

<style lang="scss" scoped>
.el-icon-search {
  vertical-align: middle;
}
</style>
