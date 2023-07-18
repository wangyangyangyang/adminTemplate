<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="doExport">列表导出 &nbsp;|<i class="el-icon-upload2 el-icon--right"></i></el-button>
          <el-button type="primary" @click="doImport">列表导入 &nbsp;|<i class="el-icon-download el-icon--right"></i></el-button>
          <el-button type="primary" @click="doDownload">模板下载 &nbsp;|<i class="el-icon-folder el-icon--right"></i></el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div class="contentContainer">
        <div class="expertTeamContainer">
          <div class="item">
            <el-row style="height: 34px">
              <div class="expertTag">
                主任
              </div>
            </el-row>
            <el-row class="expertMsgBox" style="height: 291px">
              <div class="expertAvatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="expertName">
                罗永浩
              </div>
              <div class="expertPhone">
                <span><img src="./assets/phone@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>183898989445</span>
              </div>
              <div class="expertPosition">
                <span><img src="./assets/space@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>天安门广场</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene" @click="goScene">去现场</el-button>
                <el-popover
                  placement="top-start"
                  title="擅长领域"
                  width="200"
                  trigger="hover"
                  content="环境风险评估，环境损害评估，时间调查与应急">
                  <el-button class="expertiesAreas" slot="reference">擅长领域</el-button>
                </el-popover>
              </div>
            </el-row>
          </div>
          <div class="item">
            <el-row style="height: 34px">
              <div class="expertTag">
                管理中心经理
              </div>
            </el-row>
            <el-row class="expertMsgBox" style="height: 291px">
              <div class="expertAvatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="expertName">
                李四
              </div>
              <div class="expertPhone">
                <span><img src="./assets/phone@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>183898989445</span>
              </div>
              <div class="expertPosition">
                <span><img src="./assets/space@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>天安门广场</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene" @click="goScene">去现场</el-button>
                <el-popover
                  placement="top-start"
                  title="擅长领域"
                  width="200"
                  trigger="hover"
                  content="环境风险评估，环境损害评估，时间调查与应急">
                  <el-button class="expertiesAreas" slot="reference">擅长领域</el-button>
                </el-popover>
              </div>
            </el-row>
          </div>
          <div class="item">
            <el-row style="height: 34px">
              <div class="expertTag">
                主任
              </div>
            </el-row>
            <el-row class="expertMsgBox" style="height: 291px">
              <div class="expertAvatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="expertName">
                张三
              </div>
              <div class="expertPhone">
                <span><img src="./assets/phone@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>183898989445</span>
              </div>
              <div class="expertPosition">
                <span><img src="./assets/space@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>天安门广场</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene" @click="goScene">去现场</el-button>
                <el-popover
                  placement="top-start"
                  title="擅长领域"
                  width="200"
                  trigger="hover"
                  content="环境风险评估，环境损害评估，时间调查与应急">
                  <el-button class="expertiesAreas" slot="reference">擅长领域</el-button>
                </el-popover>
              </div>
            </el-row>
          </div>
          <div class="item">
            <el-row style="height: 34px">
              <div class="expertTag">
                主任
              </div>
            </el-row>
            <el-row class="expertMsgBox" style="height: 291px">
              <div class="expertAvatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="expertName">
                罗永浩
              </div>
              <div class="expertPhone">
                <span><img src="./assets/phone@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>183898989445</span>
              </div>
              <div class="expertPosition">
                <span><img src="./assets/space@2x.png" alt="" width="16px" height="16px" style="vertical-align: middle"></span>
                <span>天安门广场</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene" @click="goScene">去现场</el-button>
                <el-popover
                  placement="top-start"
                  title="擅长领域"
                  width="200"
                  trigger="hover"
                  content="环境风险评估，环境损害评估，时间调查与应急">
                  <el-button class="expertiesAreas" slot="reference">擅长领域</el-button>
                </el-popover>
              </div>
            </el-row>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            @current-change="currentPageChange"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </el-card>

    <el-dialog
      title="处置中事件列表"
      :visible.sync="handleEventDialog"
      width="30%">
      <div class="eventContainer">
        <el-row class="eventListItem">
          <el-col :span="22">
            <div class="eventTitle">
              广西百色铜陵县疑似胶水泄露事件
            </div>
            <div class="eventMsg">
              事发时间：2022-02-22 12时 | <span class="changeOrange">暂无污染信息</span> | 待定
            </div>
          </el-col>
          <el-col :span="2">
              <el-checkbox v-model="checked"></el-checkbox>
          </el-col>
        </el-row>
        <el-row class="eventListItem">
          <el-col :span="22">
            <div class="eventTitle">
              广东百色铜陵县疑似胶水泄露事件
            </div>
            <div class="eventMsg">
              事发时间：2022-02-22 12时 | 跨省 | <span class="changeOrange">石油类</span> | 待定
            </div>
          </el-col>
          <el-col :span="2">
              <el-checkbox v-model="checked"></el-checkbox>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleEventDialog = false">取 消</el-button>
        <el-button type="primary" @click="handleEventDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'companyPersonnelInformation',
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      handleEventDialog: false,
      checked: true
    }
  },
  methods: {
    doExport() {

    },
    doImport() {

    },
    doDownload() {

    },
    goScene() {
      this.handleEventDialog = true
    },
    currentPageChange() {

    },
  }
}
</script>

<style lang="scss" scoped>
.expertTeamContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: calc((100% - 64px)/5);
    // width: 313px;
    height: 325px;
    background: #FFFFFF;
    border-radius: 2px;
    margin-bottom: 16px;
    // margin-right: 16px;
    .expertTag {
      height: 100%;
      color: #FFFFFF;
      display: inline-block;
      padding: 7px 18px;
      box-sizing: border-box;
      background: linear-gradient(180deg, #2CA6CF 0%, #0F5E8B 100%);
      border-radius: 2px 0px 2px 0px;
      font-size: 14px;
    }
    .expertMsgBox {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .expertAvatar {
        width: 80px;
        height: 80px;
        text-align: center;
      }
      .expertName {
        font-size: 18px;
        font-weight: 500;
        color: #333333;
      }
      .expertAndName {
        text-align: center;
      }
      .expertPhone {
        width: 140px;
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        span:nth-child(2) {
          margin-left: 4px;
        }
      }
      .expertMechanism {
        font-size: 14px;
        font-weight: 400;
        color: #666666;
      }
      .eventListTitle {
        font-size: 14px;
        font-weight: 500;
        color: #333333;
      }
      .expertPosition {
        width: 140px;
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        span:nth-child(2) {
          margin-left: 4px;
        }
      }
      .eventTime {
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
      }
      .handleOptions {
        font-size: 0;
        // .el-button:nth-child(1) {
        //   font-size: 14px;
        //   font-weight: 400;
        //   color: #FFFFFF;
        //   width: 108px;
        //   height: 42px;
        //   background: linear-gradient(180deg, #2CA6CF 0%, #0F5E8B 100%);
        //   border-radius: 2px;
        //   border: 1px solid #57C0E4;
        // }
        // .el-button:nth-child(2) {
        //   font-size: 14px;
        //   font-family: PingFangSC-Regular, PingFang SC;
        //   font-weight: 400;
        //   color: #666666;
        //   background: #FFFFFF;
        //   height: 42px;
        //   border-radius: 0px 2px 2px 0px;
        //   border: 1px solid #57C0E4;
        //   margin-left: 0px;
        // }
        .scene {
          font-size: 14px;
          font-weight: 400;
          color: #FFFFFF;
          width: 108px;
          height: 42px;
          background: linear-gradient(180deg, #2CA6CF 0%, #0F5E8B 100%);
          border-radius: 2px;
          border: 1px solid #57C0E4;
        }
        .expertiesAreas {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          background: #FFFFFF;
          height: 42px;
          border-radius: 0px 2px 2px 0px;
          border: 1px solid #57C0E4;
          margin-left: 0px;
        }
      }
    }
  }
  // .item:last-child {
  //   margin-right: auto;
  // }

  .item:nth-of-type(5n+0) {
    margin-right: 0px;
  }
  .item:not(:nth-child(5n)) {
    margin-right: 16px;
  }
  // .item::after {
  //   content: '';
  //   flex: auto;
  // }
}

.el-icon-upload2 {
  vertical-align: middle;
}
.el-icon-download {
  vertical-align: middle;
}
.el-icon-folder {
  vertical-align: middle;
}

.eventListItem {
  height: 88px;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #DCDEE0;
  margin-bottom: 16px;
  .el-col {
    height: 100%;
  }
  .el-col:nth-child(2) {
    text-align: center;
    line-height: 88px;
  }
  .eventTitle {
    margin: 16px auto 8px 16px;
    font-weight: 500;
    color: #333333;
  }
  .eventMsg {
    margin-left: 16px;
    font-weight: 400;
    color: #666666;
  }
}

.changeOrange {
  color: #F96C15;
}
</style>
