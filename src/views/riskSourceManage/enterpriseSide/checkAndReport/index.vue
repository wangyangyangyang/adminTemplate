<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="formData.formInline">
          <el-form-item label="年度：">
            <el-date-picker
      v-model="formData.formInline.year"
      type="year"
      placeholder="选择年">
    </el-date-picker>
          </el-form-item>
          <el-form-item label="月份：">
            <el-date-picker
              v-model="formData.formInline.month"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="文档名称：">
            <el-input v-model="formData.formInline.fileName" placeholder="请输入文档名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getList('search')">搜索&nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
    </el-card>

    <el-card>
      <div class="content-box">
        <div class="table_in">
           <el-button type="primary"
            >新建排查信息 <el-divider direction="vertical"></el-divider
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
                  @click="editTab(scope.row)"
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
const defaultFormdata = {
  formInline: {
    pageNo: 1,
    pageSize: 10,
    year:'',
    month:'',
    fileName:'',
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
    value: "file",
    label: "文档名称",
    show: true,
    dictCode: null,
    timePattern: null,
    type: "select",
  },

  {
    value: "unitCategoryName",
    label: "备注",
    show: true,
    dictCode: null,
    timePattern: null,
    //rule: "phoneValidate",电话校验
    rule: "unVerify", // 不必填
    type: "select",
  },
];
export default {
  name: 'emergencyManagement',
  data() {
    return {
      searchForm: {
        searchValue: '',
        serachDate: '',
      },
      formData: JSON.parse(JSON.stringify(defaultFormdata)),
      tHead: Object.assign([], defaultHeadData),
      headData: Object.assign([], defaultHeadData),
      tableList: [],
       total: 0,
      tabKey: 1,
      multipleSelection:[]
    }
  },
  created(){
    this.getList()
  },
  methods: {
     getList(sr){
        this.tableList.push({
name:'九江' ,
type:'环保',
fileName:'上传'
        })
        this.total = this.tableList.length
     },
         // 复选框选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    doDownload() {

    },
    doDownload(row) {

    },
  
    doDelete(row) {

    },
  }
}
</script>

<style lang="scss" scoped>
.table_in{
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
}

</style>
