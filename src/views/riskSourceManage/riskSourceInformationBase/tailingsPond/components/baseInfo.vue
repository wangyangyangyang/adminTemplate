<template>
  <div class="containerBox">
    <el-descriptions class="margin-top" title="" :column="2" border :labelStyle="{fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          尾矿库名称:
        </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          设计库容(万m³):
        </template>
        <el-input v-model="desForm.length"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          矿山名称:
        </template>
        <el-input v-model="desForm.code"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          现入库库容(万m³):
        </template>
        <el-input v-model="desForm.nengli"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业名称:
        </template>
        <el-input v-model="desForm.guanminzi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          行业类别:
        </template>
        <el-input v-model="desForm.qu"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库地址:
        </template>
        <el-input v-model="desForm.jiezhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库级别:
        </template>
        <el-input v-model="desForm.qishi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          地理坐标:
        </template>
        <el-input v-model="desForm.jibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          是否属于三线一单约束范围:
        </template>
        <el-input v-model="desForm.tujing"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          投产时间:
        </template>
        <el-input v-model="desForm.mingcheng"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急预案相关文件:
        </template>
        <el-input v-model="desForm.zhongzhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库服务期限:
        </template>
        <el-input v-model="desForm.qixian"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急监测方案:
        </template>
        <el-input v-model="desForm.fangan"></el-input>
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
        qixian: '',
        fangan: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
