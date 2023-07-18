<template>
<el-scrollbar>
  <div class="right_content_overflow" >
    <el-card v-show="main">
      <div class="table_top">
        <div>
          <span class="top_line"></span>
          <span class="top_title">风险源信息填报</span>
        </div>
        <div>
          <el-button type="primary"
            >确认上报 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-document el-icon--right"></i
          ></el-button>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="content-box">
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
            <template scope="scope" v-if="item.value == 'riskSourceTypeContent'">
              {{ nameMap[scope.row.riskSourceTypeContent] }}
            </template>
            <!-- <template scope="scope" v-else-if="item.value=='completeStatusContent'" >
            <div class="status" :style="{background:statusMap[scope.row.completeStatusContent].backGround,color:statusMap[scope.row.completeStatusContent].color}">
              <img :src="statusMap[scope.row.completeStatusContent].url"/>{{statusMap[scope.row.completeStatusContent].name}}
            </div>
          </template> -->
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
                  @click="editTab(scope.row)"
                  size="mini"
                  type="primary "
                  >编辑</el-button
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
    </el-card>
    <qiye v-show="detail"/>
    <fengxian v-show="fengxian"/>
    <emergencySupplies v-show="ES"/>
    <tactful v-show ="MG"/>
  </div>
</el-scrollbar>
</template>
<script>
import qiye from "./qiye.vue"
import fengxian from "./fengxian.vue"
import emergencySupplies from "./emergencySupplies.vue"
import tactful  from "./tactful.vue"
import informationFillingApi from "@/api/riskSourceManage/enterpriseSide/informationFillingApi"
const defaultFormdata = {
  formInline: {
    pageSize: 10,
    pageNum: 1,
    // companyId:'1556929386636513280'
   
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
    value: "riskSourceTypeContent",
    label: "表格名称",
    show: true,
    type: "",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "completeStatusContent",
    label: "完成状态",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
];
export default {
  name: "emergencyManagement",
  components:{
     qiye,
     fengxian,
     emergencySupplies,
     tactful
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
      total: 0,
      tabKey: 1,
      multipleSelection: [],
      nameMap: {
        1: "企业基本信息",
        2: "风险源",
        3: "应急物资",
        4: "敏感目标",
      },
       statusMap:{
         2:{name:'信息未填报',url:require("@/assets/images/dzg.png"),backGround:'rgba(116, 116, 116, .1)',color:'#343434'},
         3:{name:'信息待确认',url:require("@/assets/images/yqwzg.png"),backGround:'rgba(255, 0, 0, .1)',color:'#EA0404'}
      },
      main:true,
      detail:false,
      fengxian:false,
      ES:false,
      MG:false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(sr) {
      informationFillingApi.getPage(this.formData.formInline).then((res)=>{
        console.log(res.data,'分页数据')
        this.tableList = res.data.list
        this.total = res.data.total
      })
      // this.tableList.push(
      //   {
      //     name: "1",
      //     status: "3",
      //   },
      //   {
      //     name: "2",
      //     status: "2",
      //   },
      //   {
      //     name: "3",
      //     status: "3",
      //   },
      //   {
      //     name: "4",
      //     status: "2",
      //   }
      // );
      // this.total = this.tableList.length;
    },
    //编辑
    editTab(row) {
      this.$nextTick(() => {
        if (row.name == "1") {
          this.main = false
          this.detail = true
          // this.$router.replace({ path: "@/views/riskSourceManage/enterpriseSide/informationFilling/qiye", query: { data: row } });
        }
        if(row.name=='2'){
          this.main = false
          this.fengxian = true
        }
        if(row.name=='3'){
          this.main = false
          this.ES = true;
        }
        if(row.name== '4'){
          this.main = false
          this.MG = true
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
.status{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:8px 10px;
    border-radius: 15px;
    width:max-content;
    img{
        width:18px;
        height:18px;
        margin-right: 5px;
    }
}
::v-deep .el-table .cell.el-tooltip{
  text-align: -webkit-center;
}
</style>