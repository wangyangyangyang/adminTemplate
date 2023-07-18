<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchForm">
        <el-form-item label="">
          <el-input v-model="searchForm.searchValue" placeholder="内容标题"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value1" placeholder="内容编号">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value2" placeholder="发布单位">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.value3" placeholder="请选择关键字">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div class="caseContainer">
        <div class="caseItem">
          <el-row>
            <div class="itemTag">
              技术规范
            </div>
          </el-row>
          <el-row>
            <el-col :span="18">
              <div class="caseItemLeft">
                <div class="caseTitle">
                  铁路交通事故应急就和调查处理条例
                </div>
                <div class="caseOverview">
                  为了加强危险化学品的管理，预防和减少化学品的事故，保障人群众财产安全，保护环境，指定本规则。
                </div>
                <div class="caseSource">
                  中华人民共和国国务院 | 国务院令第345条
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="caseItenRight">
                <span>2022-22-22</span>
                <el-button type="primary" @click="showDetail" size="small">查看</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="caseItem">
          <el-row>
            <div class="itemTag">
              技术规范
            </div>
          </el-row>
          <el-row>
            <el-col :span="18">
              <div class="caseItemLeft">
                <div class="caseTitle">
                  铁路交通事故应急就和调查处理条例
                </div>
                <div class="caseOverview">
                  为了加强危险化学品的管理，预防和减少化学品的事故，保障人群众财产安全，保护环境，指定本规则。
                </div>
                <div class="caseSource">
                  中华人民共和国国务院 | 国务院令第345条
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="caseItenRight">
                <span>2022-22-22</span>
                <el-button type="primary" @click="showDetail" size="small">查看</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="caseItem">
          <el-row>
            <div class="itemTag">
              技术规范
            </div>
          </el-row>
          <el-row>
            <el-col :span="18">
              <div class="caseItemLeft">
                <div class="caseTitle">
                  铁路交通事故应急就和调查处理条例
                </div>
                <div class="caseOverview">
                  为了加强危险化学品的管理，预防和减少化学品的事故，保障人群众财产安全，保护环境，指定本规则。
                </div>
                <div class="caseSource">
                  中华人民共和国国务院 | 国务院令第345条
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="caseItenRight">
                <span>2022-22-22</span>
                <el-button type="primary" @click="showDetail" size="small">查看</el-button>
              </div>
            </el-col>
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
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'technicalSpecificationLibrary',
  data() {
    return {
      searchForm: {
        searchValue: '',
        value1: '',
        value2: '',
        value3: '',
      },
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
  },
  methods: {
    doSearch() {

    },
    showDetail() {

    },
    currentPageChange() {

    },
  }
}
</script>

<style lang="scss" scoped>
.caseContainer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .caseItem {
    height: 190px;
    width: calc((100% - 16px)/2);
    margin-right: 16px;
    margin-bottom: 16px;
    // background: pink;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px 0px #EBEDF0;
    &:nth-of-type(2n) {
      margin-right: 0px;
    }
    &:not(:nth-child(2n)) {
      margin-right: 16px;
    }
    .itemTag {
      height: 25px;
      width: 80px;
      line-height: 25px;
      padding-left: 4px;
      color: #FFFFFF;
      font-size: 14px;
      background: url('../../../components1/assets/tag-green.png') no-repeat;
    }
    .caseItemLeft {
      height: 169px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 18px 40px 24px 24px;
      box-sizing: border-box;
      .caseTitle {
        font-weight: 500;
        color: #000000;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
      }
      .caseOverview {
        font-weight: 400;
        color: #666666;
        font-size: 14px;
      }
      .caseSource {
        font-weight: 400;
        color: #333333;;
        font-size: 14px;
      }
    }
    .caseItenRight {
      // display: flex;
      // justify-content: space-around;
      height: 169px;
      line-height: 169px;
      color: #333333;
      font-size: 14px;
      // &:nth-child(2) {
      //   margin-left: 20px;
      // }
      .el-button {
        margin-left: 30px;
      }
    }
  }
}

.el-icon-search {
  vertical-align: middle;
}
</style>
