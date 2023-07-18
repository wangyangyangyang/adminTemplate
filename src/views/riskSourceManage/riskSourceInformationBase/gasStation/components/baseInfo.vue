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
        <template slot="label"> 加油站名称: </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label"> 所属公司名称: </template>
        <el-input v-model="desForm.code"></el-input>
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
      :labelStyle="{ width: '180px', fontSize: '14px', color: '#323232' }"
    >
      <el-descriptions-item label="联系电话:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="详细地址:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="规模:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="所属流域:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="应急预案名称:">
        <el-input v-model="desForm.fadingdianhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 企业应急预案相关文件: </template>
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
