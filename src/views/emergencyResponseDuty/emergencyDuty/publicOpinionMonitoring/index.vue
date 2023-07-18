<template>
  <div class="right_content_overflow">
    <el-card class="cardBox">
      <el-row :gutter="10" style="height: 100%;">
        <el-col :span="6" style="height: 100%;">
          <div class="leftContainer">
            <el-row :gutter="10">
              <el-col :span="17">
                <el-input placeholder="请输入内容" v-model="searchValue">
                  <template slot="append">
                    <el-button type="primary">搜索</el-button>
                  </template>
                </el-input>
              </el-col>
              <el-col :span="7">
                <el-button type="primary" @click="doAddNews">添加 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
              </el-col>
            </el-row>
            <el-row style="margin: 14px auto;">
              <el-col class="summary" :span="16">
                数据总数：434项 | 未读 39项
              </el-col>
              <el-col :span="8" style="text-align: right; color: #999999;">
                <el-checkbox v-model="checked">全部已读</el-checkbox>
              </el-col>
            </el-row>
            <div class="newsListContainer">
              <div class="newsItem" tabindex="1">
                <div class="new">
                  <span v-if="!checked">新</span>
                  <span v-else></span>
                </div>
                <div class="newsBody">
                  <div class="newtitle">
                    吴淞口一装载700吨油品邮轮起火载700吨油品邮轮起火
                  </div>
                  <div class="handleTool">
                    <el-row>
                      <el-col :span="16">2022-22-22 | 河南省松口</el-col>
                      <el-col :span="8" class="btnBox">
                        <el-button class="editBtn" type="text" icon="el-icon-edit">修改</el-button>
                        <!-- <el-button class="editBtn" type="text" icon="el-icon-delete">删除</el-button> -->
                        <el-popconfirm
                          hide-icon
                          placement="top"
                          confirm-button-text='确定'
                          cancel-button-text='取消'
                          title="删除后此条信息将不再展示，是否删除？"
                          @confirm="confirmDelete"
                          @cancel="cancelDelete"
                        >
                          <el-button slot="reference" class="editBtn" type="text" icon="el-icon-delete">删除</el-button>
                        </el-popconfirm>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
              <div class="newsItem" tabindex="2">
                <div class="new">
                  <span v-if="!checked">新</span>
                  <span v-else></span>
                </div>
                <div class="newsBody">
                  <div class="newtitle">
                    吴淞口一装载700吨油品邮轮起火载700吨油品邮轮起火
                  </div>
                  <div class="handleTool">
                    <el-row>
                      <el-col :span="16">2022-22-22 | 河南省松口</el-col>
                      <el-col :span="8" class="btnBox">
                        <el-button class="editBtn" type="text" icon="el-icon-edit">修改</el-button>
                        <!-- <el-button class="editBtn" type="text" icon="el-icon-delete">删除</el-button> -->
                        <el-popconfirm
                          hide-icon
                          placement="top"
                          confirm-button-text='确定'
                          cancel-button-text='取消'
                          title="删除后此条信息将不再展示，是否删除？"
                          @confirm="confirmDelete"
                          @cancel="cancelDelete"
                        >
                          <el-button slot="reference" class="editBtn" type="text" icon="el-icon-delete">删除</el-button>
                        </el-popconfirm>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="18" style="height: 100%;">
          <div class="rightContainer">
            <iframe src="https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%8E%E4%B9%8B%E7%BE%8E%E7%9C%8B%E4%B8%9C%E6%96%B9%23&topic_ad=" frameborder="0" style="width:100%; height: 100%;"></iframe>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="添加新闻"
      :visible.sync="addNewsDialogVisible"
      width="25%">
      <div class="addNewsDialog">
        <el-form :model="addNewsForm" label-position="left" label-width="90px" style="background: #ffffff;">
          <el-form-item label="新闻标题：">
            <el-input v-model="addNewsForm.title" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="新闻时间：">
            <el-input v-model="addNewsForm.time" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="新闻链接：">
            <el-input v-model="addNewsForm.link" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="事发地点：">
            <el-input v-model="addNewsForm.place" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAddNews">取 消</el-button>
        <el-button type="primary" @click="confirmAddNews">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'publicOpinionMonitoring',
  data() {
    return {
      searchValue: '',
      checked: false,
      addNewsDialogVisible: false,
      addNewsForm: {
        title: '',
        time: '',
        link: '',
        place: '',
      }
    }
  },
  methods: {
    doAddNews() {
      this.addNewsDialogVisible = true
    },
    cancelAddNews() {
      this.addNewsDialogVisible = false
    },
    confirmAddNews() {
      this.addNewsDialogVisible = false
    },
    confirmDelete() {

    },
    cancelDelete() {

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
.leftContainer {
  padding: 16px;
  height: 100%;
  font-size: 14px;
  color: #333333;
  background: #FFFFFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .newsListContainer {
    width: 100%;
    height: 90%;
    overflow: auto;
    .newsItem {
      height: 110px;
      background: #FFFFFF;
      border-radius: 2px;
      border: 1px solid #E5E5E5;
      margin-bottom: 16px;
      cursor: pointer;
      &:focus {
        box-shadow: 0px 4px 8px 0px rgba(42,137,225,0.4500);
        border: 1px solid #2A89E1;
      }
      &:hover {
        box-shadow: 0px 4px 8px 0px rgba(42,137,225,0.4500);
        border: 1px solid #2A89E1;
      }
      .new {
        height: 14px;
        line-height: 14px;
        span {
          display: inline-block;
          color: #ffffff;
          transform: scale(0.8);
          background: #D02727;
          border-radius: 1px 2px 2px 2px;
          padding: 2px;
          margin-left: -2px;
          margin-top: -2px;
        }
      }
      .newsBody {
        height: 96px;
        // background: pink;
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .handleTool {
          font-size: 14px;
          color: #999999;
          .btnBox {
            display: flex;
            justify-content: space-around;
            .editBtn {
              padding: 0;
              font-size: 14px;
              color: #999999;
              &:nth-child(2) {
                margin-left: 2px;
              }
            }
          }
        }
      }
    }
  }
}

.rightContainer {
  height: 100%;
  width: 100%;
  background: #FFFFFF;
}

.summary {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.el-input-group__append {
  .el-button {
    color: white;
  }
}
</style>
