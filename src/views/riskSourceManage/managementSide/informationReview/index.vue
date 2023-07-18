<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="formData.formInline">
        <el-form-item label="县/区：">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="企业名称：">
          <el-input
            v-model="formData.formInline.fileName"
            placeholder="请输入文档名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="上报时间：">
          <el-date-picker
            v-model="formData.formInline.month"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList('search')"
            >搜索&nbsp;|<i class="el-icon-search el-icon--right"></i
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
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="备注"
            width="150"
          >
            <template slot-scope="scope">
              <div class="table_btn">
                <el-button
                  @click="access(scope.row)"
                  size="mini"
                  type="primary "
                  >通过</el-button
                >
                <el-button
                  @click="refuse(scope.row)"
                  size="mini"
                  type="primary "
                  >驳回</el-button
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
    <refuseTab 
      ref="refuseTab"
      :title="'驳回意见'"
      :key="tabKey"
      />
  </div>
</template>
<script>
import refuseTab from "./refuse.vue"
import informationReviewApi from "@/api/riskSourceManage/managementSide/informationReviewApi"

const defaultFormdata = {
  formInline: {
    pageSize: 10,
    pageNum: 1,
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
    label: "行政区划",
    show: true,
    type: "",
    rule: "",
    dictCode: null,
    timePattern: null,
    disabled: null,
  },
  {
    value: "type",
    label: "企业名称",
    show: true,
    maxLength: "100",
    dictCode: null,
    timePattern: null,
  },
  {
    value: "file",
    label: "企业地址",
    show: true,
    dictCode: null,
    timePattern: null,
    type: "select",
  },

  {
    value: "unitCategoryName",
    label: "上报时间",
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
    refuseTab,
  },
  data() {
    return {
      searchForm: {
        searchValue: "",
        serachDate: "",
      },
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
      total: 0,
      tabKey: 1,
      multipleSelection:[],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(sr) {
      // this.tableList.push({
      //   name: "九江",
      //   type: "环保",
      //   fileName: "上传",
      // });
      // this.total = this.tableList.length;
        informationReviewApi.getPage(this.formData.formInline).then((res)=>{
        console.log(res,'分页数据')
      })
    },
      // 复选框选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 驳回
    refuse(row){
      this.$nextTick(()=>{
        this.$refs.refuseTab.Show()
      })
    },
    // 通过
    access(row){

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
</style>
