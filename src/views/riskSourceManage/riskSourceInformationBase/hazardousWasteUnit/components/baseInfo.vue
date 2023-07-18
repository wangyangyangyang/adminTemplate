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
          联系人:
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
          联系电话:
        </template>
        <el-input v-model="desForm.nengli"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          行政区别:
        </template>
        <el-input v-model="desForm.guanminzi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业属性:
        </template>
        <el-input v-model="desForm.qu"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          地理坐标:
        </template>
        <el-input v-model="desForm.jiezhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业注册类型:
        </template>
        <el-input v-model="desForm.qishi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          法人代表:
        </template>
        <el-input v-model="desForm.jibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          经营方式:
        </template>
        <el-input v-model="desForm.tujing"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          详细地址:
        </template>
        <el-input v-model="desForm.mingcheng"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          经营单位类别:
        </template>
        <el-input v-model="desForm.zhongzhi"></el-input>
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
        length: '张三',
        code: '913604816834950990',
        nengli: '16451343424',
        guanminzi: '燕郊',
        qu: '',
        jiezhi: '',
        qishi: '',
        jibie: '',
        tujing: '',
        mingcheng: '',
        zhongzhi: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
