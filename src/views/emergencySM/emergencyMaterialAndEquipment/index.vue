<template>
  <div class="right_content_overflow">
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="应急材料清单" name="first">
      </el-tab-pane>
      <el-tab-pane label="车辆工程机械清单" name="second">
      </el-tab-pane>
    </el-tabs>

    <template v-if="activeName == 'first'">
      <emergencyMaterialList />
    </template>
    <template v-else-if="activeName == 'second'">
      <vehicleMachineryList />
    </template>
  </div>
</template>
<script>
import emergencyMaterialList from '../../components1/emergencyMaterialList.vue'
import vehicleMachineryList from '../../components1/vehicleMachineryList.vue'
export default {
  name: 'emergencyMaterialAndEquipment',
  components: {
    emergencyMaterialList,
    vehicleMachineryList
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
