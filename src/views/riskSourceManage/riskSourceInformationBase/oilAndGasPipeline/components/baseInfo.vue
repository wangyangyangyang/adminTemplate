<template>
  <div class="containerBox">
    <el-descriptions class="margin-top" title="" :column="2" border :labelStyle="{fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          所属管道企业名称:
        </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          管道总长:
        </template>
        <el-input v-model="desForm.length"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          统一社会信用代码:
        </template>
        <el-input v-model="desForm.code"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          年输气能力:
        </template>
        <el-input v-model="desForm.nengli"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          管道名称:
        </template>
        <el-input v-model="desForm.guanminzi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          管线贯穿的环境功能区:
        </template>
        <el-input v-model="desForm.qu"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          输送介质:
        </template>
        <el-input v-model="desForm.jiezhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          是否跨境:
        </template>
        <el-radio-group v-model="desForm.kuajing">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          起始:
        </template>
        <el-input v-model="desForm.qishi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          可能造成的突发环境事件级别:
        </template>
        <el-input v-model="desForm.jibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          途径:
        </template>
        <el-input v-model="desForm.tujing"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急元名称:
        </template>
        <el-input v-model="desForm.mingcheng"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          终止:
        </template>
        <el-input v-model="desForm.zhongzhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急预案相关文件:
        </template>
        <el-input v-model="desForm.wenjian"></el-input>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  name: 'baseInfo',
  data() {
    return {
      desForm: {
        name: '中国石化管道储运有限公司天津输油处',
        length: '1110km',
        code: '913604816834950990',
        nengli: '234立方米',
        guanminzi: '燕郊',
        qu: '',
        jiezhi: '原油',
        kuajing: 1,
        qishi: '江西省九江市永修县云山首站',
        jibie: '',
        tujing: '武宁县武宁站',
        mingcheng: '',
        zhongzhi: '修水县修水站',
        wenjian: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
