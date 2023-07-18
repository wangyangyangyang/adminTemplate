<template>
  <div class="containerBox">
    <el-descriptions class="margin-top" title="" :column="2" border :labelStyle="{fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          项目名称:
        </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          企业行业类别:
        </template>
        <el-input v-model="desForm.length"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          建设单位:
        </template>
        <el-input v-model="desForm.code"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          生产规模:
        </template>
        <el-input v-model="desForm.nengli"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          统一社会信用代码:
        </template>
        <el-input v-model="desForm.guanminzi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          是否属于三线一单约束范围内:
        </template>
        <el-radio-group v-model="desForm.kuajing">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          行政区划:
        </template>
        <el-input v-model="desForm.qu"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          所属流域:
        </template>
        <el-input v-model="desForm.jiezhi"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          地理坐标:
        </template>
        <el-input v-model="desForm.qishi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急预案名称:
        </template>
        <el-input v-model="desForm.jibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          法人代表:
        </template>
        <el-input v-model="desForm.tujing"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急预案相关文件:
        </template>
        <el-input v-model="desForm.mingcheng"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急电话:
        </template>
        <el-input v-model="desForm.zhongzhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急监测方案:
        </template>
        <el-input v-model="desForm.wenjian"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          详细地址:
        </template>
        <el-input v-model="desForm.dizhi"></el-input>
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
        length: '其他水上运输辅助活动',
        code: '瑞昌市沿江开发建设投资有',
        nengli: '年接收并转运船舶生活垃圾',
        guanminzi: '913604816834950990',
        qu: '修水县修水站',
        jiezhi: '长江流域',
        kuajing: 1,
        qishi: '东经115°32，北纬',
        jibie: '',
        tujing: '武宁县武宁站',
        mingcheng: '',
        zhongzhi: '修水县修水站',
        wenjian: '',
        dizhi: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
