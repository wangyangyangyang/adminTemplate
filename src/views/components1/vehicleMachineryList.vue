<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchFormForMechanics">
        <el-form-item label="行政区划：">
          <el-select v-model="searchFormForMechanics.xingzheng1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchFormForMechanics.xingzheng2" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchFormForMechanics.xingzheng3" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业名称：">
          <el-input style="width: 300px" v-model="searchFormForMechanics.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
          <el-button type="primary" @click="doReset">重置 &nbsp;|<i class="el-icon-refresh-left el-icon--right"></i></el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div class="content-box">
        <el-table
          :data="tableDataForMechanics"
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
            prop="che"
            label="车型"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="hao"
            label="车号"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="si"
            label="司机"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="ying"
            label="应急功能"
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
  name: 'vehicleMachineryList',
  data() {
    return {
      searchFormForMechanics: {
        xingzheng1: '',
        xingzheng2: '',
        xingzheng3: '',
        name: '湖南铜业股份有限公司城门山铜矿',
      },
      tableDataForMechanics: [
        {
          che: '丰田卡罗拉',
          hao: '京AG9005',
          si: '张三',
          ying: '指挥用车',
        }
      ],
      options:[{
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
    doReset() {

    },
    currentPageChange() {

    }
  },
}
</script>

<style lang="scss" scoped>
.el-icon-search {
  vertical-align: middle;
}
.el-icon-refresh-left {
  vertical-align: middle;
}
</style>
