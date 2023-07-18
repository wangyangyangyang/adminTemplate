<template>
  <div class="right_content_overflow">
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="环境风险源隐患排查台账" name="first">
      </el-tab-pane>
      <el-tab-pane label="新建排查信息" name="second">
      </el-tab-pane>
    </el-tabs>

    <template v-if="activeName == 'first'">
      <creatTab />
    </template>
    <template v-else-if="activeName == 'second'">
      <checkTab />
    </template>
  </div>
</template>
<script>
import checkTab from "./check.vue"
import creatTab from "./creat.vue"
export default {
  name: 'emergencyMaterialAndEquipment',
  components: {
    checkTab,
    creatTab
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
