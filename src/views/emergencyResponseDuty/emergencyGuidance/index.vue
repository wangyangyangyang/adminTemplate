<template>
  <div class="right_content_overflow">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="1.应急值守" name="first"></el-tab-pane>
      <el-tab-pane label="2.行前准备" name="second"></el-tab-pane>
      <el-tab-pane label="3.现场应急" name="third"></el-tab-pane>
      <el-tab-pane label="4.事件调查" name="fourth"></el-tab-pane>
      <el-tab-pane label="5.事件总结" name="fifth"></el-tab-pane>
    </el-tabs>
  
    <template v-if="activeName == 'first'">
      <incidentInvestigation />
    </template>
    <template v-else-if="activeName == 'second'">
      <preparationBeforeDeparture />
    </template>
    <template v-else-if="activeName == 'third'">
      <onSiteWatch />
    </template>
    <template v-else-if="activeName == 'fourth'">
      <onSiteEmergency />
    </template>
    <template v-else-if="activeName == 'fifth'">
      <eventSummary />
    </template>
  </div>
</template>
<script>
import incidentInvestigation from '../../components1/incidentInvestigation.vue'
import preparationBeforeDeparture from '../../components1/preparationBeforeDeparture.vue'
import onSiteWatch from '../../components1/onSiteWatch.vue'
import onSiteEmergency from '../../components1/onSiteEmergency.vue'
import eventSummary from '../../components1/eventSummary.vue'
export default {
  name: 'emergencyGuidance',
  components: {
    incidentInvestigation,
    preparationBeforeDeparture,
    onSiteWatch,
    onSiteEmergency,
    eventSummary,
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
