<template>
  <div class="right_content_overflow">
    <el-card class="cardBox">
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
                <!-- <img :src="circleUrl" alt="" width="80px" height="80px"> -->
              </div>
              <div class="expertName">
                罗永浩 | 183898989445
              </div>
              <div class="expertMechanism">
                <span>肾绞痛科学研究院</span>
              </div>
              <div class="eventListTitle">
                <span>广西百色铜陵县疑似胶水泄露事件</span>
              </div>
              <div class="eventTime">
                <span>事发时间：2022-02-22 12时</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene">返回</el-button>
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
                <!-- <img :src="circleUrl" alt="" width="80px" height="80px"> -->
              </div>
              <div class="expertName">
                罗永浩 | 183898989445
              </div>
              <div class="expertMechanism">
                <span>肾绞痛科学研究院</span>
              </div>
              <div class="eventListTitle">
                <span>广西百色铜陵县疑似胶水泄露事件</span>
              </div>
              <div class="eventTime">
                <span>事发时间：2022-02-22 12时</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene">返回</el-button>
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
                <!-- <img :src="circleUrl" alt="" width="80px" height="80px"> -->
              </div>
              <div class="expertName">
                罗永浩 | 183898989445
              </div>
              <div class="expertMechanism">
                <span>肾绞痛科学研究院</span>
              </div>
              <div class="eventListTitle">
                <span>广西百色铜陵县疑似胶水泄露事件</span>
              </div>
              <div class="eventTime">
                <span>事发时间：2022-02-22 12时</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene">返回</el-button>
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
                <!-- <img :src="circleUrl" alt="" width="80px" height="80px"> -->
              </div>
              <div class="expertName">
                罗永浩 | 183898989445
              </div>
              <div class="expertMechanism">
                <span>肾绞痛科学研究院</span>
              </div>
              <div class="eventListTitle">
                <span>广西百色铜陵县疑似胶水泄露事件</span>
              </div>
              <div class="eventTime">
                <span>事发时间：2022-02-22 12时</span>
              </div>
              <div class="handleOptions">
                <el-button type="primary" class="scene">返回</el-button>
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
  </div>
</template>
<script>
export default {
  name: 'sitePersonnelInformation',
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
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
.cardBox {
  height: 100%;
}
::v-deep.cardBox .el-card__body {
    height: 100%;
  }

.contentContainer {
  height: 100%;
  overflow: auto;
}
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
</style>
