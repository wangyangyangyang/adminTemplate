<template>
  <div class="right_content_overflow">
    <el-card>
      <div class="table_top">
        <div>
          <span class="top_line"></span>
          <span class="top_title">企业风险源</span>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="newTab">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="first">
            <template slot="label">
              <span><img src="@/assets/images/yjya.png" /></span>
              <!-- <i class="el-icon-setting"></i> -->
              <span>风险物质</span>
            </template>
          </el-tab-pane>
          <el-tab-pane label="" name="second">
            <template slot="label">
              <span><img src="@/assets/images/clgc.png" /></span>
              <span>风险单元分布图</span>
            </template>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="content-box" v-show="activeName == 'first'">
        <div class="table_in">
          <el-button type="primary" @click="saveTab"
            >保存 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-circle-plus-save el-icon--right"></i
          ></el-button>
          <el-button type="primary" @click="addTab"
            >增加 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-circle-plus-outline el-icon--right"></i
          ></el-button>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableList"
          style="width: 100%"
          border
          fit
          @selection-change="handleSelectionChange"
          :header-cell-style="{
            background: '#F3F5F8',
            color: '#333333',
            height: '60px',
          }"
        >
          <el-table-column
            align="center"
            type="selection"
            width="50"
          ></el-table-column>
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="60"
            fixed="left"
          />
          <el-table-column
            v-for="(item, index) in tHead"
            :key="index"
            align="center"
            :prop="item.value"
            :label="item.label"
            :width="item.width"
            :show-overflow-tooltip="true"
            :fixed="item.fixed"
          >
            <template scope="scope" v-if="item.type == 'input'">
              <el-input v-model="scope.row[item.value]"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <div class="table_btn">
                <el-button
                  @click="deleteTab(scope.row, scope.$index)"
                  size="mini"
                  type="danger"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
          <template slot="empty">
            <dl id="zwsj">
              <dt>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconzanwuziliao" />
                </svg>
              </dt>
              <dd>暂无资料</dd>
            </dl>
          </template>
        </el-table>
        <div class="pagination">
          <pagination
            v-show="total > 0"
            :total="total"
            :page.sync="formData.formInline.pageNum"
            :limit.sync="formData.formInline.pageSize"
            @pagination="getList"
          />
        </div>
      </div>
      <div v-show="activeName == 'second'" class="content-box">
        <div class="table_in">
          <el-button type="primary"
            >保存 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-tickets el-icon--right"></i
          ></el-button>
          <el-button type="primary"
            >查看<el-divider direction="vertical"></el-divider
            ><i class="el-icon-circle-plus-outline el-icon--right"></i
          ></el-button>
        </div>
        <div class="upload-container">
          <el-upload
            ref="upload"
            :limit="1"
            accept=".xlsx, .xls"
            :action="upload.url"
            :disabled="upload.isUploading"
            :on-progress="handleFileUploadProgress"
            :on-success="handleFileSuccess"
            :auto-upload="false"
            :headers="headerObj"
            :file-list="fileList"
            :on-change="changeFile"
            drag
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              <div class="el-upload_content">
                <span class="el-upload__tip_icon">*</span>
                <span class="el-upload__tip_title">
                  提示：图片格式支持：png / jpg / shp</span
                >
              </div>
            </div>
          </el-upload>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="onSubmit" size="mini"
              >导入</el-button
            >
            <!-- <el-button @click="unShow" size="mini">取 消</el-button> -->
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script >
const defaultFormdata = {
  formInline: {
    // area: null,
    // name: null,
    // restaurantName:null,
    // stationCode:null,
    // pageNum: 0, pageSize: 0,
    distance360400051: 0,
    pageNo: 1,
    pageSize: 10,
    restaurantName: "",
    stationCode: "",
    city: [],
  },
  // pageDTO: { pageNum: 1, pageSize: 10 },
};
const defaultHeadData = [
  /**
   * show: table列表显示字段
   * addShow:  添加页面显示字段
   *  rule: "unVerify", 是否校验
   */
  {
    value: "name",
    label: "原(辅)料名称",
    show: true,
    type: "input",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "type",
    label: "化学名称",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "number",
    label: "CAS号",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "status",
    label: "物理状态",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "物质分类",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "设计贮存量（t）",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "近一年最大贮存量（t）",
    type: "input",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
];
export default {
  name: "emergencyManagement",

  data() {
    return {
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
      total: 0,
      tabKey: 1,
      multipleSelection: [],
      main: true,
      detail: false,
      fengxian: false,
      activeName: "first",
      // 用户导入参数
      upload: {
        // 是否禁用上传
        isUploading: false,
        // 是否更新已经存在的用户数据
        // updateSupport: 0,
        // 设置上传的请求头部
        fileToken: { token: "" },
        // 上传的地址
        url: "http://106.225.177.204:8082/psm/lampblack/importEnterpriseInfo",
        templateName: "", //模板名
      },
      fileList: [],
      headerObj: {},
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(sr) {
      // this.tableList.push(
      //   {
      //     name: "1",
      //     type: "环保",
      //   },
      //   {
      //     name: "2",
      //     type: "环保",
      //   },
      //   {
      //     name: "3",
      //     type: "环保",
      //   },
      //   {
      //     name: "4",
      //     type: "环保",
      //   }
      // );
      this.total = this.tableList.length;
    },
    //删除
    deleteTab(params, index) {
      console.log(params, index, "删除");
      this.$nextTick(() => {
        this.tableList = this.tableList.filter((ele) => {
          console.log(ele,'ele')
          // var flag = false;
          // // 如果不一致，则保留该行
          // for (const key in params) {
          //   if (ele[key] != params[key]) {
          //     flag = true;
          //     break;
          //   }
          // }
          // return flag;
        });
        // 如果全部删除后没有可以点击的一行了，需要加一行空行
        if (!this.tableList.length) {
          this.addTab();
        }
      });
    },
    // 复选框选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(tab, e) {
      console.log(tab, e);
    },
    // 保存
    saveTab() {},
    // 增加
    addTab() {
      this.tableList.push({
        name: "",
        type: "",
        status: "",
      });
    },
    // 导入
    onSubmit() {},
    changeFile() {},
    handleFileSuccess() {},
    handleFileUploadProgress() {},
  },
};
</script>
<style scoped lang="scss">
.table_top {
  display: flex;
  justify-content: space-between;
  .top_line {
    width: 5px;
    height: 16px;
    background: #00ace5;
    display: inline-block;
    vertical-align: middle;
  }
  .top_title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
  }
}
.newTab {
  img {
    width: 27px;
    height: 27px;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}
.table_in {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
}
.dialog-footer {
  width: 100%;
  text-align: center;
  margin-top: 28px;
  .el-button--primary {
    width: 60%;
  }
}
.el-upload__tip {
  width: 60%;
  text-align: left;
  display: inline-block;
  .el-upload_content {
    width: 100%;
    .el-upload__tip_icon {
      color: red;
    }
    .el-upload__tip_title {
      font-size: 16px;
      font-weight: 400;
      color: #747474;
    }
  }
}
</style>