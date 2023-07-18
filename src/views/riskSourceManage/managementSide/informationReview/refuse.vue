<template>
  <el-dialog
    :title="title"
    :visible.sync="centerDialogVisible"
    append-to-body
    :close-on-click-modal="false"
    v-if="centerDialogVisible"
    width="500px"
    height="400px"
    center
  >
     <div class="refuse_box">
        <div class="refuse_content">
        <el-input type="textarea" placeholder="请输入驳回意见" rows="5"></el-input>

        </div>
         <div class="dialog-footer">
        <el-button size="mini" type="primary" @click="creatForm"
          >确认</el-button
        >
        <el-button size="mini" type="primary" @click="importForm"
          >取消</el-button>
      </div>
     </div>
  </el-dialog>
</template>
<script>

export default {
  // mixins: [verify],
  inheritAttrs: true,
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  
  data() {
    return {
      centerDialogVisible: false,
      reason: "", //撤销理由
    };
  },
  created() {},
  methods: {
    getVerify(rule) {
      return this[rule];
    },
    //显示dialog
    Show() {
      this.centerDialogVisible = true;
    },
    unShow() {
      this.centerDialogVisible = false;
    },
    setData(data) {
      this.centerDialogVisible = true;
      this.parmas = JSON.parse(JSON.stringify(data));
      this.getList(data);
    },
   
  },
};
</script>
<style scoped lang="scss">
::v-deep .el-dialog__header {
  background: linear-gradient(0deg, #1b7fb2, #269dc6);
  // border-radius: 5px 5px 0px 0px;
  text-align: left;
  padding: 13px 20px !important;
  span {
    color: #fff;
  }
  .el-dialog__title {
    font-size: 14px;
    letter-spacing: 2px;
  }
}
// 弹框关闭按钮 X
::v-deep .el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
::v-deep .el-dialog--center .el-dialog__body{
    padding:0 !important;
}

.refuse_content{
    margin:20px 20px;
}
.dialog-footer{
    text-align: right;
height: 53px;
line-height: 53px;
padding-right:20px;
background: #F3F3F3;
border-radius: 0px 0px 4px 4px;
}
</style>
