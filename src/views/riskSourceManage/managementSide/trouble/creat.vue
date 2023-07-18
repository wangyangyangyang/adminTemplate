<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="formData.formInline">
        <el-form-item label="县/区：">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="单位名称：">
          <el-input
            v-model="formData.formInline.fileName"
            placeholder="请输入文档名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="排查时间：">
          <el-date-picker
            v-model="formData.formInline.month"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
         <el-form-item label="整改状态：">
         	<el-select clearable v-model="checkboxList" placeholder=" 请选择整改状态"  style="width:100%">
					<el-option v-for="item in 24" :key="item" :value="item-1">{{item-1}}</el-option>
			</el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList('search')"
            >查询&nbsp;|<i class="el-icon-search el-icon--right"></i
          ></el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
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
          <template slot-scope="scope" v-if="item.value=='status'" >
            <div class="status" :style="{background:statusMap[scope.row.status].backGround,color:statusMap[scope.row.status].color}">
              <img :src="statusMap[scope.row.status].url"/>{{statusMap[scope.row.status].name}}
            </div>
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
                  @click="viewTab(scope.row)"
                  size="mini"
                  type="primary "
                  >查看</el-button
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
            :page.sync="formData.formInline.pageNo"
            :limit.sync="formData.formInline.pageSize"
            @pagination="getList"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
// import refuseTab from "./refuse.vue"
const defaultFormdata = {
  formInline: {
    pageNo: 1,
    pageSize: 10,
    year: "",
    month: "",
    fileName: "",
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
    label: "单位名称",
    show: true,
    type: "",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "type",
    label: "排查时间",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  
  // {
  //   value: "status",
  //   label: "整改状态",
  //   show: true,
  //   dictCode: null,
  //   timePattern: null,
  //   //rule: "phoneValidate",电话校验
  //   rule: "unVerify", // 不必填
  //   type: "select",
  // },
  {
    value: "unitCategoryName",
    label: "文件名称",
    show: true,
    dictCode: null,
    timePattern: null,
    //rule: "phoneValidate",电话校验
    rule: "unVerify", // 不必填
    type: "select",
  },
];
export default {
  name: "emergencyManagement",
  components:{
    // refuseTab,
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
      total: 0,
      tabKey: 1,
      multipleSelection:[],
      statusMap:{
         1:{name:'已整改',url:require("@/assets/images/zg.png"),backGround:'rgba(0, 223, 0, .1)',color: '#00B01D'},
         2:{name:'待整改',url:require("@/assets/images/dzg.png"),backGround:'rgba(116, 116, 116, .1)',color:'#343434'},
         3:{name:'逾期未整改',url:require("@/assets/images/yqwzg.png"),backGround:'rgba(255, 0, 0, .1)',color:'#EA0404'}
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(sr) {
      this.tableList.push(
        {
        name: "九江",
        type: "环保",
        fileName: "上传",
        status:'1',
      },
      {
        name: "九江",
        type: "环保",
        fileName: "上传",
        status:'2',
      },
      {
        name: "九江",
        type: "环保",
        fileName: "上传",
        status:'3',
      }
      );
      this.total = this.tableList.length;
    },
      // 复选框选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 查看
    viewTab(row){
       this.$nextTick(()=>{
        this.$refs.viewTab.Show()
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.table_in {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
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
