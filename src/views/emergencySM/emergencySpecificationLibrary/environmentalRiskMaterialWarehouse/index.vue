<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchForm">
        <el-form-item label="">
          <el-input v-model="searchForm.searchValue" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value1" placeholder="请选择污染物分类">
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
          :data="tableDataForRiskMaterial"
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
            label="名称"
            min-width="140">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.name}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="jianyi"
            label="建议应急物资"
            min-width="120">
            <template slot-scope="scope">
            <el-link type="primary">{{scope.row.jianyi}}</el-link>
          </template>
          </el-table-column>
          <el-table-column
            prop="liuyu"
            label="流域水环境污染应急处置技术"
            min-width="120">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.liuyu}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="zilai"
            label="自来水污染应急处置技术"
            min-width="120">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.zilai}}</el-link>
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
  name: 'environmentalRiskMaterialWarehouse',
  data() {
    return {
      searchForm: {
        searchValue: '',
        value1: '',
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
      tableDataForRiskMaterial: [
        {
          name: '氧化物',
          jianyi: '聚合吕（混凝土，适用范围phs-16）',
          liuyu: '臭氧化物（适用于氧化铝）',
          zilai: '液态氮氧化法，臭氧化法',
        }
      ],
    }
  },
  methods: {
    doSearch() {

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
