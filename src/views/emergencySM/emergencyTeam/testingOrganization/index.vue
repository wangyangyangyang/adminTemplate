<template>
  <div class="right_content_overflow">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="单位人员信息" name="first"></el-tab-pane>
      <el-tab-pane label="现场人员信息" name="second"></el-tab-pane>
    </el-tabs>
	
    <template v-if="activeName == 'first'">
      <companyPersonnelInformation />
    </template>
    <template v-else-if="activeName == 'second'">
      <sitePersonnelInformation />
    </template>
  </div>
</template>
<script>
import companyPersonnelInformation from '../../../components1/companyPersonnelInformation.vue'
import sitePersonnelInformation from '../../../components1/sitePersonnelInformation.vue'
export default {
  name: 'testingOrganization',
  components: {
    companyPersonnelInformation,
    sitePersonnelInformation
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick() {

    },
  }
}
</script>

<style lang="scss" scoped>
.msgTotal {
  color: #199DD4 
}

.testingOrganizatinContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .organizationItem {
    height: 356px;
    width: calc((100% - 48px)/4);
    background: white;
    margin-bottom: 16px;
    &:nth-of-type(4n) {
      margin-right: 0px;
    }
    &:not(:nth-child(4n)) {
      margin-right: 16px;
    }
    .organizationTitle {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      background: #199DD4;
      border-radius: 2px 2px 0px 0px;
      padding-left: 16px;
    }
  }
}

.organizationForm {
  padding-left: 16px;
  ::v-deep.el-form-item {
    margin-bottom: 0px;
  }
  ::v-deep.el-form-item__label {
    height: 34px;
  }
  ::v-deep.el-form-item__content {
    height: 34px;
    color: #666666;
  }
}

.el-icon-search {
  vertical-align: middle;
}
.el-icon-circle-plus-outline {
  vertical-align: middle;
}

.card-box {
  height: 100%;
}
::v-deep.card-box .el-card__body {
  height: 100%;
  overflow: auto;
}

.station {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
