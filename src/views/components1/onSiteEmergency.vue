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
              1.调查准备
            </div>
            <div class="cardItem" tabindex="2" @click="handleCardItem('2')">
              2.启动程序
            </div>
            <div class="cardItem" tabindex="3" @click="handleCardItem('3')">
              3.措施步骤
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('4')">
              4.调查终结
            </div>
            <div class="cardItem last" tabindex="5" @click="handleCardItem('5')">
              5.信息公开
            </div>
          </div>
          <!-- <p>{{cardContent}}</p> -->
          <p v-if="currentSelect === '1'">
            法律依据。根据不同事件类型，搜集并熟悉相关法律法规。如《中华人民共和国环境保护法》《中华人民共和国突发事件应对法》《中华人民共和国安全生产法》《生产安全事故报告和调查处理条例》《国家突发环境事件应急预案》《突发环境事件调查处理办法》等。<br />
            资料清单。收集应急处置过程资料。包括应急监测、信息报告、应对处置、经济损失等方面资料。根据不同事件类型和《突发环境事件调查处理办法》规定的须查明内容，梳理拟向地方调取的资料清单。<br />
          </p>
          <p v-else-if="currentSelect === '2'">
            启动时间。突发环境事件发生后视情况及时开展调查。一般在事件处置形势稳定后开展调查，以不干涉应急处置为原则。起草开展调查工作的请示签报，报部领导。<br />
            制定方案。制定调查方案（见模板范式4-1），明确调查组成员名单、职责分工、方法步骤、时间安排、注意事项等内容。<br>
            启动方式。经部领导批示同意成立调查组。视情发布开展调查信息，起草新闻通稿。调查组组长一般由分管副部长担任，副组长一般由应急中心负责同志担任。
          </p>
          <p v-else-if="currentSelect === '3'">
            现场勘查。勘查突发环境事件现场，应当取样监测、拍照、录像、绘制现场图，并制作现场勘查笔录。调查组现场进行勘查应由调查组成员主持，调查组成员不得少于两人。勘查笔录，应由调查人员、参加勘查的人员签名（见模板范式4-2）。<br />
            人员询问。根据调查需要，对突发环境事件发生单位有关人员、参与应急处置工作的知情人员进行询问，并制作询问笔录。进行询问，不得少于两人。询问应当个别进行。询问前，应当了解被询问人的身份，与事件的关系，调查人员不得向被询问人泄露事件情况或者表示对事件的看法。询问笔录应由调查人、被询问人签字（见模板范式4-3）。<br />
            资料收集。调取和复制相关文件、资料、数据、记录等。调查组可以收集地方政府和有关部门在突发环境事件发生单位建设项目立项、审批、验收、执法等日常监管过程中和突发环境事件应对、组织开展突发环境事件污染损害评估等环节形成的材料以及履职情况的证据材料。收集的形式包括通过谈话方式形成的“谈话记录”。<br />
          </p>
          <p v-else-if="currentSelect === '4'">
            调查报告。在查明突发环境事件基本情况后，及时起草突发环境事件调查报告。报经部领导同意后向相关地方政府或有关部门移交。调查报告视情可纳入相关责任追究情况。<br>
            报告移送。需要相关部门开展责任追究等工作的，应及时做好移送工作。移送材料主要包括调查报告以及相关证明材料的复印件。移送文件可视情加盖部办公厅或应急办公章。<br>
            案卷归档。制作调查案卷并归档保存。调查案卷应当包括调查方案、询问笔录、勘查笔录、收集清单、损害评估报告、突发环境事件调查报告等文书，还应包括其他关于事件的基本情况、突发环境事件单位的情况、有关生态环境部门应急管理方面的材料、地方政府和有关部门日常管理的相关材料，以及污染涉及范围记录、应急处置和各项损失费用记录、事件发生前后的气象水文资料、具有法律性质的文书的正本或副本、签报及有关领导同志重要修改的文稿、有关突发环境事件的请示、批复等内部活动材料。
          </p>
          <p v-else-if="currentSelect === '5'">
            事件调查结束后，应当及时向社会公开调查结论或者调查报告。须起草新闻通稿。新闻通稿及调查报告（或结论）报经部领导审批同意后，由宣教司统一发布。
          </p>
        </div>  
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'onSiteEmergency',
  data() {
    return {
      currentSelect: '1',
      mainContent: '查明事件原因、事件应对过程，确认事件性质，认定事件责任，评估事件环境影响与损失评估，对负有责任的单位和人员提请当地政府予以问责，总结经验教训，督促指导各地采取有效措施，防止类似事件再次发生，维护环境安全。',
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
