<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchForm">
          <el-form-item label="演练名称：">
            <el-input v-model="searchForm.drillName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="演练时间：">
            <el-date-picker
              v-model="searchForm.drillDate"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
            <el-button type="primary" @click="doAdd">新增 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
    </el-card>

    <el-card>
      <div class="content-box">
        <el-table
          :data="tableDataForEmergency"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="演练名称"
            min-width="120">
            <template slot-scope="scope">
              <el-link type="primary">{{scope.row.name}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="演练地点"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            label="演练时间"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="演练方式"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="160">
            <template slot-scope="scope">
              <el-button type="primary" @click="doDownload(scope.row)">下载</el-button>
              <el-button class="operationBtn" size="mini" @click="doEdit(scope.row)">修改</el-button>
              <el-button class="operationBtn" size="mini" @click="doDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @current-change="currentPageChange"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </el-card>

    <el-dialog
      title="新增应急演练"
      :visible.sync="newAddDialog"
      width="45%">
      <el-form inline label-position="left" label-width="100px" :model="newAddForm" style="background: #fff">
        <el-row :gutter="20" class="dialogRow">
          <el-col :span="12">
            <el-form-item label="演练名称：">
              <el-input class="formInput" v-model="newAddForm.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="演练地点：">
              <el-input v-model="newAddForm.address" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="dialogRow">
          <el-col :span="12">
            <el-form-item label="协助单位：">
              <el-input v-model="newAddForm.danwei" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="参加人数：">
              <el-input v-model="newAddForm.renshu" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="dialogRow">
          <el-col :span="12">
            <el-form-item class="formItemDate" label="演练时间：">
              <el-date-picker
                v-model="newAddForm.shijian"
                type="date"
                style="width: 200"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="演练方式：">
              <el-input v-model="newAddForm.fangshi" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="dialogRow">
          <el-col :span="12">
            <el-form-item label="演练类别：">
              <el-input v-model="newAddForm.leibie" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="dialogRow">
          <el-form-item class="formItemPlan" label="演练场景与计划：">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入"
              v-model="newAddForm.plan">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row class="dialogRow">
          <el-form-item class="formItemPlan" label="演练过程描述总结：">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入"
              v-model="newAddForm.plan">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row class="dialogRow">
          <el-form-item label=" ">
            <span class="uploaderTitle">图片上传</span>
          </el-form-item>
        </el-row>
        <el-row class="dialogRow">
          <el-form-item label=" ">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="newAddForm.imageUrl" :src="newAddForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelNewAdd">返 回</el-button>
        <el-button type="primary" @click="confirmNewAdd">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import emergencyManagementApi from '@/api/emergencySM/emergencyManagementApi'
export default {
  name: 'emergencyManagement',
  data() {
    return {
      searchForm: {
        drillName: '',
        drillDate: '',
        pageNum: 1,
        pageSize: 10,
      },
      total: 50,
      tableDataForEmergency: [
        {
          name: '突发环境事件应急演练',
          address: '兰德朕',
          time: '2022-22-22',
          type: '现场',
        }
      ],
      newAddDialog: false,
      newAddForm: {
        name: '',
        address: '',
        danwei: '',
        renshu: '',
        shijian: '',
        fangshi: '',
        leibie: '',
        plan: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    doSearch() {
      emergencyManagementApi.page(this.searchForm).then(res => {
        // if (res.code === '000000') {
          // this.tableDataForEmergency = 
          console.log(res);
          
        // }
      })
    },
    doAdd() {
      this.newAddDialog = true
    },
    doDownload() {

    },
    doDownload(row) {

    },
    doEdit(row) {
      this.newAddDialog = true
    },
    doDelete(row) {

    },
    cancelNewAdd() {
      this.newAddDialog = false
    },
    confirmNewAdd() {
      this.newAddDialog = false
    },

     handleAvatarSuccess(res, file) {
        // this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      },
      currentPageChange(page) {
        this.searchForm.pageNum = page
        this.doSearch()
      }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__body {
  padding: 30px 20px 30px 40px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 1px solid #DCDEE0;
  background: #DCDEE0;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
.uploaderTitle {
  color: #323233;
  font-size: 16px;
  font-weight: 600;
}

::v-deep .formItemDate .el-input__inner {
  width: 210px;
}
::v-deep .formItemPlan {
  width: 100%;
}
::v-deep .formItemPlan .el-form-item {
  width: 202px;
}
::v-deep .formItemPlan .el-form-item__content {
  width: 80%;
}

.el-icon-search {
  vertical-align: middle;
}
.el-icon-circle-plus-outline {
  vertical-align: middle;
}

.operationBtn {
  padding: 4px 7px;
  font-size: 9px;
  border: 1px solid #B6B6B6;
}

.dialogRow {
  margin-bottom: 16px;
}
</style>
