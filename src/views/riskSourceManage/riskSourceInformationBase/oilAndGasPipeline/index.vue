<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline label-position="left" :model="searchForm">
        <el-form-item label="企业名称:">
          <el-input v-model="searchForm.searchValue"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="first">
        <el-card class="card-box">
          <div class="content-box">
            <baseInfo />
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="周边环境风险受体" name="second">
        <el-card class="card-box">
          <surroundRiskReceptor />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="环境风险物质" name="third">
        <el-card class="card-box">
          <div class="content-box">
            <environmentalRiskSubstances />
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="可能突发性环境风险事件" name="fourth">
        <el-card class="card-box">
          <div class="content-box">
            <possibleRiskEvents />
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="历史突发性环境风险事件" name="fifth">
        <el-card class="card-box">
          <div class="content-box">
            暂无
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="环境监测信息" name="sixth">
        <environmentalDetectionInfor />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import baseInfo from './components/baseInfo.vue'
import surroundRiskReceptor from './components/surroundRiskReceptor.vue'
import environmentalRiskSubstances from './components/environmentalRiskSubstances.vue'
import possibleRiskEvents from './components/possibleRiskEvents.vue'
import environmentalDetectionInfor from './components/environmentalDetectionInfor.vue'
export default {
  name: 'oilAndGasPipeline',
  components: {
    baseInfo,
    possibleRiskEvents,
    environmentalRiskSubstances,
    surroundRiskReceptor,
    environmentalDetectionInfor,
  },
  data() {
    return {
      searchForm: {
        searchValue: '',
      },
      activeName: 'first',
    }
  },
  methods: {
    handleClick() {

    },
  },
}
</script>

<style lang="scss" scoped>
.el-tabs--card {
  height: calc(100% - 122px);
  ::v-deep.el-tabs__content {
    height: calc(100% - 40px);
    .el-tab-pane {
      height: 100%;
    }
  }
}
.card-box {
  height: 100%;
}
::v-deep.card-box .el-card__body {
  height: 100%;
}
</style>
