<template>
  <div class="right_content_overflow">
    <el-card style="height: 100%">
    <el-row :gutter="10">
        <el-col :span="4">
          <div class="leftContainer">
            <el-input
              v-model="searchValue"
              suffix-icon="el-icon-search"
              style="width: 100%"
              placeholder="输入搜索内容">
            </el-input>
            <ul class="formListContainer">
              <li>
                <el-checkbox v-model="checked1">环境应急值守接报记录表</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked2">调度事项</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked3">应急报告</el-checkbox>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="rightContainer">
            <div class="containerHeader">
              <div class="controlBox">
                环境应急值守接报记录表
              </div>
              <div class="tool">
                <el-button type="primary" @click="doDownload">模板下载<i class="el-icon-download el-icon--right"></i></el-button>
              </div>
            </div>
            <div class="contentBody">
              <el-form label-position="right" label-width="160px" :model="addForm" style="background: #ffffff;">
                <el-form-item label="信息类型：">
                  <el-radio-group v-model="addForm.radio1">
                    <el-radio label="领导指示"></el-radio>
                    <el-radio label="二办调度"></el-radio>
                    <el-radio label="部门通报"></el-radio>
                    <el-radio label="总部值班室"></el-radio>
                    <el-radio label="地方报告"></el-radio>
                    <el-radio label="群众和举报"></el-radio>
                    <el-radio label="舆情检测"></el-radio>
                    <el-radio label="其他"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="途径：">
                  <el-radio-group v-model="addForm.radio2">
                    <el-radio label="应急平台/企业微信"></el-radio>
                    <el-radio label="电话"></el-radio>
                    <el-radio label="传真"></el-radio>
                    <el-radio label="邮件"></el-radio>
                    <el-radio label="微信"></el-radio>
                    <el-radio label="其他"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="莱文单位：">
                  <el-input style="width: 220px" v-model="addForm.unit" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="联系姓名：">
                  <el-input style="width: 220px" v-model="addForm.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <el-input style="width: 220px" v-model="addForm.phone" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="接报事件：">
                  <el-date-picker
                    v-model="addForm.time"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="接收人：">
                  <el-input style="width: 220px" v-model="addForm.receivePeople" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="主要内容：">
                  <el-input style="width: 920px" type="textarea" :autosize="{ minRows: 5, maxRows: 10}" v-model="addForm.desc" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center; margin-left: -160px;">
                  <el-button type="primary" @click="doSubmit">提交 &nbsp;|<i class="el-icon-circle-check el-icon--right"></i></el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'newItem',
  data() {
    return {
      searchValue: '',
      checked1: '',
      checked2: '',
      checked3: '',
      addForm: {
        radio1: '',
        radio2: '',
        unit: '',
        name: '',
        phone: '',
        time: '',
        receivePeople: '',
        desc: '',
      }
    }
  },
  methods: {
    doDownload() {

    },
    doSubmit() {

    },
  }
}
</script>

<style lang="scss" scoped>
.leftContainer {
  padding: 16px;
  height: 792px;
  font-size: 14px;
  color: #333333;
  background: #FFFFFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .formListContainer {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    margin-top: 16px;
    li {
      margin-bottom: 10px;
    }
  }
}

.rightContainer {
  height: 792px;
  width: 100%;
  background: #FFFFFF;
  .containerHeader {
    height: 68px;
    line-height: 68px;
    text-align: left;
    position: relative;
    font-size: 16px;
    .controlBox {
      width: 300px;
      height: 20px;
      line-height: 20px;
      margin-left: 10px;
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      padding-left: 16px;
      margin-left: 10px;
      transform: translateY(26px);
      background: linear-gradient(to right, #2A89E1 0, #2A89E1 4px,#ffffff 4px, #ffffff 100%);
    }
    .tool {
      position: absolute;
      top: 0px;
      right: 16px;
    }
  }
  .contentBody {
    // text-align: center;
    // font-size: 14px;
    font-weight: 400;
    color: #323233;
    padding: 40px 50px 0 50px;
    .el-radio {
      line-height: 37px;
    }
  }
}

.el-icon-circle-check {
  vertical-align: middle;
}
</style>
