<template>
  <div class="right_content_overflow" >
    <el-card >
      <div class="table_top">
        <div>
          <span class="top_line"></span>
          <span class="top_title">敏感目标</span>
        </div>
        <div>
          <el-button type="primary"
            >保存 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-tickets el-icon--right"></i
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
            <template slot-scope="scope" v-if="item.value == 'name'">
              {{ statusMap[scope.row.name] }}
            </template>
          </el-table-column>
          <!-- <el-table-column
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
          </el-table-column> -->
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
    label: "名称",
    show: true,
    type: "",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "type",
    label: "类型",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "数量",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "中心经度",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "中心纬度",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "type",
    label: "备注",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
];
export default {
  name: "emergencyManagement",
  components:{
  
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
      statusMap: {
        1: "企业基本信息",
        2: "风险源",
        3: "应急物资",
        4: "敏感目标",
      },
     
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
</style>