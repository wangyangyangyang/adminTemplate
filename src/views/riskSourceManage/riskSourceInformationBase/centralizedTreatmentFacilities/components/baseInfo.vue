<template>
  <div class="containerBox">
    <el-descriptions class="margin-top" title="" :column="1" border :labelStyle="{fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          名称:
        </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          统一社会信用代码:
        </template>
        <el-input v-model="desForm.code"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          行政区划:
        </template>
        <el-input v-model="desForm.quhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          地理坐标:
        </template>
        <el-input v-model="desForm.zuobiao"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          详细地址:
        </template>
        <el-input v-model="desForm.dizhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          法定代表人:
        </template>
        <el-input v-model="desForm.ren"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          联系电话:
        </template>
        <el-input v-model="desForm.phone"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          传真:
        </template>
        <el-input v-model="desForm.chuanzhen"></el-input>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions class="margin-top" title="" :column="1" border :labelStyle="{'width': '170px', fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          电子邮箱:
        </template>
        <el-input v-model="desForm.email"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业应急预案名称:
        </template>
        <el-input v-model="desForm.people"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业行业类别:
        </template>
        <el-input v-model="desForm.leibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业环境应急管理人员:
        </template>
        <el-descriptions  title="" direction="vertical" :column="2" border :labelStyle="{fontSize: '14px', color: '#323232', textAlign: 'center',}">
          <el-descriptions-item>
            <template slot="label">
              姓名
            </template>
            <el-input style="margin-bottom: 6px;" v-model="desForm.name1"></el-input>
            <el-input v-model="desForm.name2"></el-input>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              手机号
            </template>
            <el-input style="margin-bottom: 6px;" v-model="desForm.people1"></el-input>
            <el-input v-model="desForm.people2"></el-input>
          </el-descriptions-item>
          
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业应急预案相关文件:
        </template>
        <el-input v-model="desForm.wenjian"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急监测方案:
        </template>
        <el-input v-model="desForm.fagnan"></el-input>
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
        name: '',
        email: '',
        code: '',
        people: '',
        quhua: '',
        leibie: '',
        zuobiao: '',
        ren: '',
        phone: '',
        chuanzhen: '',
        wenjian: '',
        fagnan: '',
        name1: '',
        name2: '',
        people1: '',
        people2: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.containerBox {
  display: flex;
  // justify-content: center;
  height: 100%;
  .margin-top {
    flex: 1, 1, auto;
    width: 50%;
  }
}
</style>
