<template>
  <div class="right_content_overflow">
    <el-card class="cardBox">
      <el-row class="downloadRow">
        <el-button type="primary" @click="doDownload">下载 &nbsp;|<i class="el-icon-folder el-icon--right"></i></el-button>
      </el-row>
      <div class="contentContainer">
        <div class="topPriority">
          <div class="prioritytitle">
            主要任务
          </div>
          <p>{{mainContent}}</p>
        </div>  
        <div class="secondPriority">
          <div class="secondPrioritytitle">
            主要要点与任务
          </div>
          <div class="selectCard">
            <div class="cardItem" id="firstS" :class="{active: currentSelect == '1'}" tabindex="1" @click="handleCardItem('1')">
              1.工作总结
            </div>
            <div class="cardItem last" tabindex="5" @click="handleCardItem('2')">
              2.回顾片制作
            </div>
          </div>
          <!-- <p>{{cardContent}}</p> -->
          <p v-if="currentSelect === '1'">
            现场应急响应结束后，应组织对事件应对全过程进行复盘，及时梳理事件经验教训，形成总结报告（见模板范式5-1）。对重特大突发环境事件，应编写大事记（见模板范式5-2）。
          </p>
          <p v-else-if="currentSelect === '2'">
            对典型的重特大或敏感突发环境事件，根据应对工作实际，结合前期现场应急阶段资料收集情况，编写解说词。解说词主要包括事件背景、应急目标、应急处置、事件总结等内容。回顾片制作由应急中心牵头负责，参与突发环境事件应对的相关单位配合（见模板范式5-3）。
          </p>
        </div>  
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'eventSummary',
  data() {
    return {
      currentSelect: '1',
      mainContent: '及时总结突发环境事件应急处置经验教训。对代表性强、处置过程复杂的典型突发环境事件，制作案例回顾片，供学习借鉴、举一反三、保留存档。',
      cardContent: '123',
    }
  },
  mounted() {
    document.getElementById('firstS').focus()
  },
  methods: {
    doDownload() {

    },
    handleClick() {

    },
    handleCardItem(index) {
      this.currentSelect = index
    },
  }
}
</script>

<style lang="scss" scoped>
.cardBox {
  height: 100%;
  .downloadRow {
    height: 36px;
    line-height: 36px;
    text-align: right;
    margin-bottom: 16px;
  }
  
}

::v-deep.cardBox .el-card__body {
    height: 100%;
  }

.contentContainer {
    height: calc(100% - 52px);
    background: #ffffff;
    .topPriority {
      height: 20%;
      .prioritytitle {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        font-weight: 500;
        color: #333333;
        display: inline-block;
        margin-top: 16px;
        margin-left: 16px;
        // margin-bottom: 16px;
        padding-left: 12px;
        background: linear-gradient(to right, #15A1D4 0px, #15A1D4 4px, white 4px, white 100%);
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        margin: 26px;
        text-indent: 2rem;
      }
    }
    .secondPriority {
      height: 80%;
      .secondPrioritytitle {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        font-weight: 500;
        color: #333333;
        display: inline-block;
        margin-top: 16px;
        margin-left: 16px;
        padding-left: 12px;
        background: linear-gradient(to right, #15A1D4 0px, #15A1D4 4px, white 4px, white 100%);
      }
      .selectCard {
        margin: 26px;
        height: 48px;
        .cardItem {
          display: inline-block;
          height: 100%;
          width: 50%;
          font-size: 14px;
          text-align: center;
          line-height: 48px;
          font-weight: 500;
          color: #323233;
          border-top: 1px solid #DCDEE0;
          border-bottom: 1px solid #DCDEE0;
          position: relative;
          &:nth-child(1) {
            border-left: 1px solid #DCDEE0;
            &:focus {
              background: #15A1D4;
              &::after {
                position: absolute;
                right: -22px;
                top: 0;
                content: '';
                width: 34px;
                height: 34px;
                display: block;
                border-top: 1px solid #DCDEE0;
                border-right: 1px solid #DCDEE0;
                background: #15A1D4;
                transform: rotate(45deg) translate(0px, 8px);
              }
            }
            // &:not(:focus) {
            //   background: white;
            //   &::after {
            //     position: absolute;
            //     left: 0px;
            //     top: 0;
            //     content: '';
            //     width: 0;
            //     height: 0;
            //     display: block;
            //     border: 23px solid transparent;
            //     border-left-width: 15px;
            //     border-left-color: white;
            //   }
            // }
            &::after {
              // position: absolute;
              // right: -38px;
              // top: 0;
              // content: '';
              // width: 0;
              // height: 0;
              // display: block;
              // border: 23px solid transparent;
              // border-left-width: 15px;
              // border-left-color: #15A1D4;
              position: absolute;
              right: -22px;
              top: 0;
              content: '';
              width: 34px;
              height: 34px;
              display: block;
              border-top: 1px solid #DCDEE0;
              border-right: 1px solid #DCDEE0;
              transform: rotate(45deg) translate(0px, 8px);
            }
          }
          &:nth-child(2) {
            border-right: 1px solid #DCDEE0;
            &:focus {
              background: #15A1D4;
              &::before {
                position: absolute;
                left: 0px;
                top: 0;
                content: '';
                width: 0;
                height: 0;
                display: block;
                border: 23px solid transparent;
                border-left-width: 15px;
                border-left-color: white;
              }
            }
          }
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        margin: 26px;
        text-indent: 2rem;
      }
    }
  }

// .active {
//   background: #15A1D4;
//   &:after {
//     position: absolute;
//     right: -38px;
//     top: 0;
//     content: '';
//     width: 0;
//     height: 0;
//     display: block;
//     border: 23px solid transparent;
//     border-left-width: 15px;
//     border-left-color: #15A1D4;
//   }
// }
</style>
