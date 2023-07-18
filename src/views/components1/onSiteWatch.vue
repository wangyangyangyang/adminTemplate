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
              1.组织体系
            </div>
            <div class="cardItem" tabindex="2" @click="handleCardItem('2')">
              2.应急目标
            </div>
            <div class="cardItem" tabindex="3" @click="handleCardItem('3')">
              3.实地勘查
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('4')">
              4.应急监测
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('5')">
              5.处置方案
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('6')">
              6.信息报告和资料收集
            </div>
            <div class="cardItem" tabindex="4" @click="handleCardItem('7')">
              7.信息公开和新闻报道
            </div>
            <div class="cardItem last" tabindex="5" @click="handleCardItem('8')">
              8.工作交接和后续跟踪
            </div>
          </div>
          <!-- <p>{{cardContent}}</p> -->
          <p v-if="currentSelect === '1'">
            前方工作组指挥长由带队赴现场的部领导担任。工作组可根据需要下设综合、监测、专家、新闻等小组。综合组主要负责统筹协调、沟通联络等工作，及时汇总并报告应急处置进展；监测组主要负责指导地方制定监测方案、科学开展监测，协调各方监测力量支持；专家组主要负责研判污染态势，提出处置建议，指导工程实施、评估处置效果等；新闻组主要负责指导地方做好信息公开，组织开展宣传报道等。<br />
            应急期间，可根据工作需要组织召开现场调度会、专家会商会等，部署安排工作、统筹协调资源、会商研判态势。
          </p>
          <p v-else-if="currentSelect === '2'">
            以“最大限度减小事件环境影响，保障生态环境安全”为原则，根据污染态势、处置难度、周边环境敏感目标分布等因素，统筹考虑可行性和科学性，确定切实可行的应急目标（见模板范式3-1）。应急目标应建立在充分了解现场情况、准确评估污染态势、全面掌握事件影响、处置措施切实可行的基础上，并在事发初期尽早确定。<br />
            需注意，应急目标与应急响应终止条件不同。应急目标主要围绕污染态势得到有效控制，不会进一步扩大污染范围或加重影响程度。应急响应终止条件则严格按照相关环境应急预案规定的条件执行。当应急目标实现后，部前方工作组可结束现场指导，后续应急处置工作可交由地方政府继续执行，直至解除应急响应。
          </p>
          <p v-else-if="currentSelect === '3'">
            通过实地勘查，全面核实掌握突发环境事件现状，包括：污染断源情况，环境敏感目标受影响及应对情况，应急监测，物资储备，工程措施选址、实施情况，处置措施效果查验等。及时发现并解决出现的问题，确保应对措施取得实效（见模板范式3-2）。
          </p>
          <p v-else-if="currentSelect === '4'">
            指导地方开展应急监测，根据需要安排中国环境监测总站参与应急监测工作，必要时调集相关生态环境监测部门进行支援。事发地可采取购买服务的方式，调集社会环境监测机构的人员、物资或设备参与应急监测。<br>
            应急监测工作参照《突发环境事件应急监测技术规范》《重特大突发水环境事件应急监测工作规程》（见模板范式3-3）执行。应急监测应当在尽可能短的时间内，以有足够代表性的监测信息，为突发环境事件应急决策提供可靠依据。根据目标的不同，应急监测分为污染态势初步研判和跟踪监测两个阶段。污染态势初步研判阶段，应急监测的目标是尽快确定污染物种类、监测项目及污染范围；跟踪监测阶段，应急监测的目标是快速获取污染物浓度及其变化趋势信息。<br>
            1.监测项目<br>
            优先选择突发环境事件特征污染物作为监测项目。特征污染物一般是事件中排放量较大或超标倍数较高，对生态环境有较大影响，可以表征事态发展的污染物。根据事件类型、污染源特征、生产工艺等，并结合事件发生地周边环境本底值情况和应急监测初筛结果确定特征污染物。必要时需增加监测指标或开展水质全分析监测。<br>
            2.监测方法<br>
            突发环境事件现场应急监测方法应满足快速、准确、规范的基本要求。根据突发环境事件的类型、污染物种类和环境影响情况，综合考虑应急监测能力、现场监测条件以及监测方法优缺点，根据不同应急阶段的监测需求，选择合适的监测方法。在满足环境应急处置需要的前提下，有多种应急监测方法可选时，应优先选择国家标准、行业标准及行业认可的监测方法，为突发环境事件的事后定性定级、司法鉴定以及环境损害评估等提供数据支撑，如有必要可留样送实验室分析。对于跨省突发环境事件，受影响地区应共同商定应急监测方法，确保监测数据互通互认。对多个环境监测队伍协同参与的突发水环境事件，各监测方应选用经应急指挥部确定的应急监测方法（见模板范式3-4 、3-5）。<br>
            3.点位布设<br>
            以准确掌握污染态势为核心，以实时监控污染物浓度变化为目标，根据事件特点和应急处置措施实施情况，建立监测点位动态调整机制。对于污染带较长的河流型突发水环境事件，结合应急处置工程措施、饮用水水源地等敏感点分布情况，一般每10-20公里布设一个控制点位。若污染带超过100公里，可适当增加点位间距。必要时，根据信息发布要求固定若干个控制点位，作为对外发布信息的依据。<br>
            点位的布设应考虑交通状况、人员安全等，确保采样的可行性和方便性，并根据污染态势动态调整。同时，监测点位应合理编号，并采用插牌固定等方式进行明显标记，防止样品混淆。<br>
            4.监测频次<br>
            监测频次主要根据处置情况和污染物浓度变化态势确定。力求以最合理的监测频次，做到既具备代表性、能满足处置要求，又切实可行。应急初期，控制点位原则上每1-2小时开展一次监测，各控制点位采样时间应保持一致。后期可视情动态调整。其中，用于发布信息的点位原则上每天监测次数不少于1次。<br>
            5.采样分析<br>
            重特大突发水污染事件应急初期，每个监测点位配备2-4组采样人员，每组至少2人，每组至少配备一辆样品运输车。污染带长度超过30公里的河流型突发水环境事件，以事件发生地为起点，每隔30-50公里布设一个现场实验室或应急监测车，负责附近监测断面的样品分析。每个实验室按照监测项目配备分析人员，每个监测项目配备2-3组人员，24小时轮流值班。前处理复杂的样品，每组配备4人；前处理简单的样品，每组配备2人。<br>
            应急监测采样时，采样人员应拍照并记录采样断面经纬度位置、采样时间和周边情况等。<br>
            6.监测报告<br>
            监测报告是应急处置决策的重要支撑，分快报、简报和分析报告三类。监测快报通常包括经初步审核的监测数据，主要强调快，应第一时间报工作组。监测简报和分析报告还应包括对监测数据的分析研判内容，主要包括：污染现状（污染前锋、峰值位置，污染团长度和范围等）；趋势判断（预测污染扩散趋势及对环境敏感目标的影响）；效果评估（根据实际情况评估应急处置工程效果）；异常分析（对监测发现的异常情况进行原因分析）；污染物浓度空间/时间变化趋势图等（见模板范式3-6 、3-7）。
          </p>
          <p v-else-if="currentSelect === '5'">
            组织专家开展态势研判、工艺选择，向地方政府提出污染控制建议，协助制定环境应急处置技术方案，评估处置效果，根据实际情况及时调整方案。<br>
            1.态势研判<br>
            根据污染源控制情况、污染物总量和理化性质、污染超标范围与时间、水文状况等，结合相关污染扩散模型，判断污染可能影响范围及程度，重点关注对环境敏感目标的影响。<br>
            2.工艺选择<br>
            根据态势研判结果，判断是否需要采用工程措施削减污染。组织专家通过经验比对、现场实验、文献查询等方式，确定污染物去除工艺及相应参数，提出工程技术方案。<br>
            3.方案制定<br>
            方案内容包括：总体情况、应急目标、污染态势、处置思路、工程措施、实施保障等章节（见模板范式3-8）。<br>
            其中，突发水污染事件环境应急处置工程措施包括源头阻断、截流引流、工程削污、调水稀释、供水保障等（见模板范式3-9 、3-10、3-11）；化工园区爆炸次生突发环境事件应急处置工程措施除涉及污染水体的拦截削污外，还需做好空气质量监测、土壤及地下水污染调查、受污染土壤及废弃化学品清运等（见模板范式3-12）。<br>
            跟踪评估工程方案实施效果，结合应急处置的不同阶段、突发情况等不断调整和完善（见模板范式3-13）。
          </p>
          <p v-else-if="currentSelect === '6'">
            前方工作组应全面了解事件进展，记录工作日志（见模板范式3-14），并及时报送现场工作简报。事发初期，应每日报送工作简报，处置状态平稳后，可视情2-3日报送一期（见模板范式3-15），遇重要情况应随时报告。<br>
            现场人员应通过“生态环境部应急中心”企业微信号及时报送现场影像信息，报送内容包括但不限于以下内容：事发点、入河点、河流交汇点、监测点、已有闸坝、新建拦截（吸附）坝、投药点、饮用水水源地、自来水厂等点位的照片、视频及定位信息（见模板范式3-16）。<br>
            同时，前方工作组应指定专人负责向工作组成员、随行记者、地方等，全面收集事件处置相关文字、图表及现场影像等资料，并做好保存归档，为事件调查、损害评估、事件总结及回顾片制作做好准备（见模板范式3-17）。<br>
          </p>
          <p v-else-if="currentSelect === '7'">
            指导地方政府做好信息公开。充分利用“两微一端”等新媒体平台，第一时间主动发声，以通俗语言说清环境影响情况，并根据工作进展持续发布权威信息，避免不实信息传播。涉及重特大突发事件，严格落实信息公开“5·24”要求（5小时内发布权威信息，24小时内举行新闻发布会）。密切关注舆情动态，对媒体、公众提出的问题或质疑，
            及时调查核实并公布情况，主动回应社会关切。生态环境部门要按照地方政府的统一部署，做好环境应急监测信息的公开，特别是重特大或敏感事件，要主动每天定时发布监测情况。<br>
            同时，及时有序开展新闻报道。根据事件处置进展，针对公众和媒体的关注重点，及时推出专题报道，展示事件应对各方面工作。可通过专家采访或邀请媒体记者现场查看等方式，解答公众疑问，体现应对工作的科学性。
          </p>
          <p v-else-if="currentSelect === '8'">
            应急总目标达成后，前方工作组可视情返回，由地方政府继续组织实施后续处置工作。前方工作组返回后，应持续跟踪关注事件进展，指导地方妥善处置。应急响应终止后，及时报送终报。<br>
          </p>
        </div>  
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'onSiteWatch',
  data() {
    return {
      currentSelect: '1',
      mainContent: '传达落实党中央、国务院领导重要批示，以及部领导指示要求；指导、协调、督促、支持地方政府妥善处置；指导地方科学开展环境应急监测、污染态势和环境影响评估；组织专家为环境应急处置工作提供技术和决策支持；全面收集掌握现场信息及污染状况，及时汇总并报告相关情况。',
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
          width: 12.5%;
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
          &:nth-child(6) {
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
          &:nth-child(7) {
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
          &:nth-child(8) {
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
        height: calc(100% - 140px);
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        margin: 26px;
        text-indent: 2rem;
        overflow: auto;
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
