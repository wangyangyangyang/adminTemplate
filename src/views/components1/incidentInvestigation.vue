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
              1.接报
            </div>
            <div class="cardItem" tabindex="2" @click="handleCardItem('2')">
              2.调度核实
            </div>
            <div class="cardItem" tabindex="3" @click="handleCardItem('3')">
              3.会商研判
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('4')">
              4.信息报告
            </div>
            <div class="cardItem last" tabindex="5" @click="handleCardItem('5')">
              5.值守协商
            </div>
          </div>
          <!-- <p>{{cardContent}}</p> -->
          <p v-if="currentSelect === '1'">
            值守人员应当及时处理以下各渠道接报的突发环境事件相关信息，并做好记录。<br />
            1.生态环境部办公厅转来中共中央办公厅和国务院办公厅下达的突发环境事件应急指令，及部领导批示指示；<br />
            2.其他部委通报的突发环境事件相关信息；<br />
            3.地方生态环境部门报告的突发环境事件信息；<br />
            4.通过新闻媒体、“12369”环保举报平台等渠道获取的突发环境事件相关信息；<br />
            5.其他途径获取的突发环境事件信息。<br />
            通过电话接报的，应同时做好书面记录。包括但不限于以下内容：接报时间、来文单位、基本情况、报告人姓名及联系方式等（见模板范式1-1）。
          </p>
          <p v-else-if="currentSelect === '2'">
            获悉突发环境事件相关信息后，值守人员应立即报告带班领导，并向相关省级生态环境主管部门调度核实事件情况。必要时可直接向相关市、县级生态环境主管部门进行调度核实。调度内容包括：事件发生时间、地点、原因、
            基本过程、主要污染物种类和数量、周边饮用水水源地等环境敏感点分布及受影响情况、监测布点和监测结果、事件处置情况、人员受害及疏散转移情况、事态发展趋势、信息报告和通报情况、下一步工作计划等（见模板范式1-2 、1-3）。<br />
            同时，利用生态环境部环境应急平台进行信息查询、污染模拟和趋势研判，全方位了解事件情况，以辅助决策。<br />
            地方生态环境主管部门上报的突发环境事件信息，应以其正式报告为准。情况紧急时，可通过电话、短信、微信等方式报告，并及时补充正式报告。
          </p>
          <p v-else-if="currentSelect === '3'">
            及时开展会商，根据事件调度核实情况，研判事件发展态势和环境影响，提出措施建议，指导督促地方妥善应对。<br />
            发生重特大突发环境事件或社会影响重大的敏感事件时，视情组织开展集中会商，邀请有关司局及部属单位相关专家参加。<br />
            初步判断情况严重或敏感的（包括但不限于以下6类情况），应急中心负责同志及时向分管副部长报告，提出派工作组赶赴现场的建议。因情况紧急未能事先报告的，应急中心可先行派员前往，并及时补充报告说明原因。<br />
            情况特别严重的，报经部党组同意后，由部长或分管副部长带队赶赴现场。<br />
            6类情况具体包括：<br />
            1.党中央、国务院领导同志作出批示的突发环境事件；<br />
            2.超出事发地省级应对能力，需要大范围甚至全国生态环境系统响应的事件；<br />
            3.可能发展成为重大或特别重大级别的突发环境事件 ；<br />
            4.社会关注度高的突发环境事件；<br />
            5.可能造成长江、黄河、珠江、松花江、淮河、海河、辽河等重点流域干流，以及丹江口水库等南水北调工程重要保护目标水质超标的突发环境事件；<br />
            6.地方上报情况不清，或前期处置不力的突发环境事件。初步研判事件影响不大，无需派员赶赴现场的，持续调度关注，直至事件处置完毕。
          </p>
          <p v-else-if="currentSelect === '4'">
            对初步认定为重特大突发环境事件、敏感事件或其他有必要报告的突发环境事件，起草《突发环境事件动态报告》（见模板范式1-4），报应急中心负责同志审核。应急中心负责同志核定后，呈报分管副部长，提出是否向国务院总值班室和中办秘书局报送《生态环境部值班信息》的建议。<br />
            部领导签发报送值班信息后，由办公厅总值班室以《生态环境部值班信息》形式，报送国务院总值班室、中办秘书局，抄送应急管理部等相关部委。情况紧急的，可先通过电话口头报告，并尽快补充书面报告。国务院总值班室或中办秘书局有明确报送时限要求的，严格按要求报送。<br />
            根据应对工作需要，视情以专报形式向应急管理部、住房和城乡建设部、交通运输部、水利部等相关部委通报事件应急处置进展信息，抄报国务院总值班室。<br />
            持续做好事件处置进展续报、领导同志批示落实情况报告和终报工作。加大现场图像、视频等影像信息的收集报送力度。<br />
            1.续报。事件处置过程中，密切跟踪事态进展，及时报送信息。<br>
            2.领导同志批示落实情况报告。党中央、国务院领导同志有批示的，在收到批示当天以《生态环境部值班信息》向国务院总值班室和中办秘书局报送落实情况，最迟不晚于接到批示后24小时。<br>
            3.终报。事件应急处置结束后，应及时终报。\n对研判认定为较大或一般等级事件，且社会关注度不高，无需上报国务院总值班室和中办秘书局的，以《环境应急值守信息》形式按月汇总呈报部领导。
          </p>
          <p v-else-if="currentSelect === '5'">
            值守人员持续做好应急值守和统筹协调工作（见模板范式1-5），包括但不限于以下事项。<br>
            接到党中央、国务院领导同志，以及部领导批示后，第一时间向前方工作组和地方生态环境部门传达，确保及时准确落实到位。<br>
            做好与相关部委、部内司局及部属单位的沟通协调工作。<br>
            适时与现场人员、应急专家等进行视频连线，了解事件应急处置情况，组织开展远程会商，指导督促地方妥善应对。<br>
            对可能造成跨省影响的突发环境事件，及时通知并指导相关省份提前做好应急准备工作，适时启动环境应急响应。<br>
            对可能造成国际影响的突发环境事件，按照《生态环境部突发环境事件涉外应急处理工作流程》（见模板范式1-6）及时向国际司报备协商，在其指导下根据相关机制要求，主动做好信息通报工作（见模板范式1-7、1-8）。<br>
            对重特大及敏感突发环境事件，做好相关舆情及“12369”环保举报情况的跟踪监测，全面掌握舆情发展情况（见模板范式1-9）。指导督促地方及时公开处置进展情况，视情通过生态环境部“两微一端”公开相关信息。
          </p>
        </div>  
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'incidentInvestigation',
  data() {
    return {
      currentSelect: '1',
      mainContent: '传达落实党中央国务院领导同志关于突发环境事件的重要批示，以及部领导具体指示要求，指导督促地方做好事件应急处置工作；及时搜集处理各种渠道获取的突发环境事件信息；调度核实事件基本情况；组织开展会商，研判事态发展情况和环境影响；编写《突发环境事件动态报告》，并按程序报批；其他统筹协调相关工作。',
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
          width: 20%;
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
          &:nth-child(5) {
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
