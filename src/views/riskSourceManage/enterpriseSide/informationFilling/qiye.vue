<template>

  <div class="right_content_overflow">
    <el-card v-show="main">
      <div class="table_top">
        <div>
          <span class="top_line"></span>
          <span class="top_title">企业基本信息</span>
        </div>
        <div>
          <el-button type="primary"
            >保存 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-circle-plus-outline el-icon--right"></i
          ></el-button>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="content-box">
        <div class="desc_content">
          <el-descriptions border :column="1" size="mini" :labelStyle="{'width':'170px','color': '#323232','fontSize':'14px'}">
            <el-descriptions-item label="企业名称:">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="统一社会信用代码:">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="行政区划:">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="地理坐标:">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="详细地址:">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="法定代表人:">
              <el-descriptions
                border
                :column="2"
                size="mini"
                class="details_in"
                :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
              >
                <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px'}">
                  <el-input></el-input>
                </el-descriptions-item>
                <el-descriptions-item label="详细地址:">
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
            <el-descriptions-item label="传真:">
              <el-descriptions
                border
                :column="2"
                size="mini"
                class="details_in"
                 :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
              >
                <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px'}">
                  <el-input></el-input>
                </el-descriptions-item>
                <el-descriptions-item label="电子邮箱:">
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
            <el-descriptions-item label="企业环境应急管理人员">
              <el-descriptions
                direction="vertical"
                :column="2"
                border
                class="details_in"
                :labelStyle="{'color': '#323232','fontSize':'14px','width':'140px'}"
              >
                <el-descriptions-item label="用户名">
                  <el-input></el-input>
                  <el-input></el-input>
                </el-descriptions-item>
                <el-descriptions-item label="手机号">
                  <el-input></el-input>
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
            <el-descriptions-item label="企业风险等级:">
              <el-radio-group v-model="radio">
                <el-radio :label="3">一般</el-radio>
                <el-radio :label="6">较大</el-radio>
                <el-radio :label="9">重大</el-radio>
                <el-radio :label="9">跨区域</el-radio>
              </el-radio-group>
            </el-descriptions-item>
            <el-descriptions-item label="企业行业类别：">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="是否有应急池:">
              <el-radio-group v-model="radio">
                <el-radio :label="3">是</el-radio>
                <el-radio :label="6">否</el-radio>
              </el-radio-group>
            </el-descriptions-item>
            <el-descriptions-item label="应急池容量">
              <el-input></el-input>
            </el-descriptions-item>
          </el-descriptions>
          <el-descriptions
            class="margin-top"
            title=""
            :column="1"
            size="mini"
            border
            :labelStyle="{'width':'240px','color': '#323232','fontSize':'14px'}"
          >
            <el-descriptions-item
              label="排口："
              label-class-name="my-label"
              content-class-name="my-content"
              >
              <el-descriptions
                border
                :column="1"
                size="mini"
                class="details_in"
                :labelStyle="{'width':'80px','color': '#323232','fontSize':'14px'}"
                
              >
                <el-descriptions-item>
                  <template slot="label">
                    <el-radio v-model="selectName" label="1"
                      >污水:
                    </el-radio></template
                  >
                  <el-input></el-input>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label"
                    ><el-radio v-model="selectName" label="2"
                      >雨水排口:
                    </el-radio>
                  </template>
                  <el-input></el-input>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <el-radio v-model="selectName" label="3"
                      >固废:
                    </el-radio></template
                  >
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>

            <el-descriptions-item label="企业是否含尾矿库预案:">
              <el-descriptions class="details_in" border   :labelStyle="{'width':'120px','color': '#323232','fontSize':'14px'}">
                <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px'}">
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
                </el-descriptions-item>

                <el-descriptions-item label="是否仅需上报尾矿车预案:">
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
            <el-descriptions-item label="预案名称：">
              <el-descriptions class="details_in" border   :labelStyle="{'width':'120px','color': '#323232','fontSize':'14px'}" >
                <el-descriptions-item :labelStyle="{'padding':'0px'}">
                  <el-input></el-input>
                </el-descriptions-item>

                <el-descriptions-item label="预案签署发布日期:">
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
             <el-descriptions-item label="企业应急预案相关文件：">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="应急监测方案：">
              <el-input></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="是否开展过环境风险评估工作：">
              <el-radio-group v-model="radio">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
            </el-descriptions-item>
            <el-descriptions-item label="是否属于重点环境监管尾矿库：">
              <el-radio-group v-model="radio">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
            </el-descriptions-item>
             <el-descriptions-item label="是否编制突发环境事件应急预案：">
              <el-radio-group v-model="radio">
                    <el-radio :label="3">是</el-radio>
                    <el-radio :label="6">否</el-radio>
                  </el-radio-group>
            </el-descriptions-item>
             <el-descriptions-item label="尾矿库预案名称：">
              <el-descriptions class="details_in" border  :labelStyle="{'width':'120px','color': '#323232','fontSize':'14px'}">
                <el-descriptions-item  :labelStyle="{'padding':'0'}">
                  <el-input></el-input>
                </el-descriptions-item>

                <el-descriptions-item label="尾矿车预案签署发布日期:">
                  <el-input></el-input>
                </el-descriptions-item>
              </el-descriptions>
            </el-descriptions-item>
             <el-descriptions-item label="尾矿库企业应急预案相关文件:">
                  <el-input></el-input>
                </el-descriptions-item>
                 <el-descriptions-item label="尾矿库应急监测方案:">
                  <el-input></el-input>
                </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
  </div>

</template>
<script>
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
    label: "表格状态",
    show: true,
    type: "",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "type",
    label: "完成状态",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
];
export default {
  name: "emergencyManagement",
  components: {},
  data() {
    return {
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
      total: 0,
      tabKey: 1,
      multipleSelection: [],
      statusMap: {
        1: "企业基本信息",
        2: "风险源",
        3: "应急物资",
        4: "敏感目标",
      },
      main: true,
      detail: false,
      size: "",
      selectName: "1",
      radio:'1'
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(sr) {
      this.tableList.push(
        {
          name: "1",
          type: "环保",
        },
        {
          name: "2",
          type: "环保",
        },
        {
          name: "3",
          type: "环保",
        },
        {
          name: "4",
          type: "环保",
        }
      );
      this.total = this.tableList.length;
    },
    //编辑
    editTab(row) {
      this.$nextTick(() => {
        if (row.name == "1") {
          this.main = false;
          this.detail = true;
          // this.$router.replace({ path: "@/views/riskSourceManage/enterpriseSide/informationFilling/qiye", query: { data: row } });
        }
      });
    },
    // 复选框选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
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
.desc_content {
  display: flex;
  justify-content: center;
  width: 100%;
}
.el-descriptions {
  width: 50%;
}
.details_in {
  width: 100%;
}
.content-box {
  height: 500px !important;
  overflow: auto;
}

</style>