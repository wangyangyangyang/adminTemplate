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
              1.组建前方工作组
            </div>
            <div class="cardItem" tabindex="2" @click="handleCardItem('2')">
              2.建立联络会商群
            </div>
            <div class="cardItem" tabindex="3" @click="handleCardItem('3')">
              3.物资准备
            </div>
            <div class="cardItem last" tabindex="4" @click="handleCardItem('4')">
              4.行程安排
            </div>
          </div>
          <p v-if="currentSelect === '1'">
            前方工作组由部长或分管部长带队，应急中心、相关区域督察局或流域局派员参与，视情调集相关司局、部属单位或科研院校专家、中国环境报记者等共同前往。专家可优先从生态环境部生态环境应急专家组（见模板范式2-1）和部属单位相关领域专家团队中选择。<br />
            预计工作时间两周以上（含两周）,前方工作组正式党员在3人以上的，应同时成立临时党支部，前方工作组所有党员均应编入临时党支部。临时党支部设书记1名，一般由应急中心负责同志担任。临时党支部建立情况，由应急中心党支部向部机关党委备案。<br />
            确定前方工作组成员后，由值守人员负责通知并填写《生态环境部前方工作组名单》（见模板范式2-2）。<br />
            对社会关注度高的事件，应通过生态环境部“两微一端”及时发布工作组赶赴现场的信息（见模板范式2-3）<br />
          </p>
          <p v-else-if="currentSelect === '2'">
            值守人员负责建立联络会商群，及时互通共享信息。参与人员包括：生态环境部前方工作组全体成员和值守人员。根据工作需要，前方工作组可建立包括地方工作人员在内的联络会商扩大群。前方工作组、值守和地方生态环境部门三方应明确1-2名联络员。前方工作组人员有变动的，由前方联络员及时更新并填写工作组联络单（见模板范式2-4）。
          </p>
          <p v-else-if="currentSelect === '3'">
            根据应急处置工作需要，携带单兵作战装备、个人防护物资、应急设备等。包括便携式单兵、无人机、防护口罩、护目镜、防护服、防护鞋、手电筒、便携式监测仪器、监测车等。因时间紧张或运送不便未携带，但在事件处置过程中确有必要的，可商请地方协调支持。
          </p>
          <p v-else-if="currentSelect === '4'">
            按照“从急从简”原则安排行程，确保工作组尽快抵达现场开展工作。在京人员应尽量选择同一航班/火车前往事发地。京外人员自行安排行程，原则上应尽可能与工作组到达时间、地点同步。<br>
            前方工作组人员名单及行程确定后，值守人员应及时转告地方生态环境部门联络员，商请协助预订住宿。事件处置期间入住宾馆应严格遵守中央国家机关差旅住宿费标准要求，地点尽可能便于现场开展工作。
          </p>
        </div>  
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'preparationBeforeDeparture',
  data() {
    return {
      currentSelect: '1',
      mainContent: '按照生态环境部党组和生态环境应急指挥领导小组安排，组建部前方工作组赶赴现场，指导、协调、支持、督促地方政府开展环境应急响应工作。根据事件应急处置工作需要，做好人员调配、物资准备、行程安排、信息公开等工作。',
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

<style lang="scss" scoped>.cardBox {
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
          width: 25%;
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
            &:focus {
              background: #15A1D4;
              &::after {
                position: absolute;
                right: -21px;
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
            &::after {
              position: absolute;
              right: -21px;
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
          &:nth-child(3) {
            &:focus {
              background: #15A1D4;
              &::after {
                position: absolute;
                right: -21px;
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
            &::after {
              position: absolute;
              right: -21px;
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
          &:nth-child(4) {
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
