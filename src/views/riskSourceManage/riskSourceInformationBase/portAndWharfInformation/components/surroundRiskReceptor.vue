<template>
  <div class="container">
    <el-tabs v-model="activeName" type="border-card" class="tabsOptions">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-date"></i> 大气环境风险受体</span>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"><i class="el-icon-date"></i> 水环境风险受体</span>
      </el-tab-pane>
      <el-tab-pane name="third">
        <span slot="label"><i class="el-icon-date"></i> 土壤环境风险受体</span>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <span slot="label"><i class="el-icon-date"></i> 声环境风险受体</span>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <span slot="label"><i class="el-icon-date"></i> 生态环境风险受体</span>
        <div class="infoContainer">
          <el-row :gutter="18" style="height: 100%">
            <el-col :span="16" style="height: 100%">
              <div class="mapContainer">地图</div>
            </el-col>
            <el-col :span="8" style="height: 100%">
              <el-table
                :data="tableData"
                border
                :header-cell-style="{textAlign: 'center'}"
                :cell-style="{textAlign: 'center'}"
                style="width: 100%">
                <el-table-column
                  type="index"
                  label="序号"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="环境风险受体"
                  min-width="120">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class="headerOptionsContainer">
      <div class="optionsItem">
        大气环境风险受体
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'surroundRiskReceptor',
  data() {
    return {
      activeName: 'fifth',
      tableData: [],
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1000);
  border-radius: 4px 10px 10px 10px;
  .tabsOptions {
    height: 100%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1000);
    border-radius: 4px 10px 10px 10px;
  }
}

.tabsOptions {
  // background: red;
  ::v-deep.is-top {
    background: #0F80B7 ;
  }
}
::v-deep .el-tabs__item {
  background: #0F80B7  !important;
}
::v-deep .el-tabs__item.is-active {
  color: #343434 !important;
  background: #fff !important;
}

.infoContainer {
  height: 100%;
  width: 100%;
  .mapContainer {
    height: 100%;
    width: 100%;
    background: pink;
  }
}

.headerOptionsContainer {
  width: 100%;
  height: 46px;
  // background: linear-gradient(0deg, #F1F3F7, #0F80B7, #1CA6D2);
  // border-radius: 4px 10px 10px 10px;
  background: linear-gradient(0deg, blue, red);
  border-radius: 0px 4px 0px 0px;
}
</style>
