<template>
  <div class="containerBox">
    <el-descriptions
      class="margin-top"
      title=""
      :column="1"
      border
      :labelStyle="{ fontSize: '14px', color: '#323232', width: '180px' }"
    >
      <el-descriptions-item>
        <template slot="label"> 项目名称: </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 统一社会信用代码: </template>
        <el-input v-model="desForm.quhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 行政区划: </template>
        <el-input v-model="desForm.zuobiao"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 地理坐标: </template>
        <el-input v-model="desForm.dizhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 法人代表: </template>
         <el-input v-model="desForm.dizhi"></el-input>
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions
      class="margin-top"
      title=""
      :column="1"
      border
      :labelStyle="{ width: '200px', fontSize: '14px', color: '#323232' }"
    >
      <el-descriptions-item label="联系电话:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="详细地址:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="行业类别:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="生产规模:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="是否属于三线一单约束范围:">
        <el-radio-group v-model="radio">
    <el-radio :label="3">是</el-radio>
    <el-radio :label="6">否</el-radio>
  </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 经营方式: </template>
        <el-input v-model="desForm.wenjian"></el-input>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  name: "baseInfo",
  data() {
    return {
      desForm: {
        name: "",
        email: "",
        code: "",
        people: "",
        quhua: "",
        leibie: "",
        zuobiao: "",
        dizhi: "",
        fading: "",
        fadingdianhua: "",
        ren: "",
        chuanzhen: "",
        dianzi: "",
        radio: 1,
        wenjian: "",
        weikuang: "",
        fagnan: "",
        name1: "",
        name2: "",
        people1: "",
        people2: "",
      },
    };
  },
};
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
