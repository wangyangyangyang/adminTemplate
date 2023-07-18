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
  name: 'enterpriseEmergencyPersonnel',
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

</style>
