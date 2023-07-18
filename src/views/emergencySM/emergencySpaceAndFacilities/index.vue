<template>
  <div class="right_content_overflow">
    <el-card>
      <el-form inline :model="searchForm">
        <el-form-item label="">
          <el-input v-model="searchForm.searchValue" placeholder="空间&设施名称"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="searchForm.searchNum" placeholder="空间&设施编号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.lei" placeholder="选择空间&设施类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.qu" placeholder="选择管理区域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
          <el-button type="primary" @click="doNewadd">新增 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
          <el-button type="primary" @click="doDownload">下载列表数据 &nbsp;|<i class="el-icon-folder el-icon--right"></i></el-button>
        </el-form-item>
      </el-form>
    </el-card>
    
    <el-card>
      <div class="content-box">
        <el-table
          :data="tableDataForEmergencySpace"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="kong"
            label="空间&设施名称"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="jian"
            label="空间&设施编号"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="she"
            label="空间&设施类型"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="qu"
            label="所在区"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="suo"
            label="所在流域"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="he"
            label="所在河流"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="160">
            <template slot-scope="scope">
              <el-button type="primary" @click="showDetail(scope.row)">查看</el-button>
              <el-button class="operationBtn" size="mini" @click="doEdit(scope.row)">编辑</el-button>
              <el-button class="operationBtn" size="mini" @click="doDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @current-change="currentPageChange"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </el-card>

    <el-dialog
      title="新增"
      :visible.sync="newAddDialog"
      width="30%">
      <el-form inline label-position="top" label-width="100px" :model="newAddForm" style="background: #fff" class="spaceAdd">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="空间&设施名称：">
              <el-input class="formInput" v-model="newAddForm.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="空间&设施编号：">
              <el-input v-model="newAddForm.address" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="空间&设施类型">
              <el-input v-model="newAddForm.danwei" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在河流：">
              <el-input v-model="newAddForm.renshu" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="坐标：">
              <span>经度</span>
              <el-input style="width: 70px;" v-model="newAddForm.jing"></el-input>
              <span>纬度</span>
              <el-input style="width: 70px;" v-model="newAddForm.wei"></el-input>
              <i class="el-icon-location" style="color: #5cb6ff; transform: scale(1.5); margin-left: 6px;"></i>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址：">
              <el-input v-model="newAddForm.fangshi" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="蓄水量（万立方米）：">
              <el-input v-model="newAddForm.leibie" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="VR链接：">
              <el-input v-model="newAddForm.plan" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item class="formItemPlan" label="备注：">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入"
              v-model="newAddForm.plan">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row class="titleForPhoto">重点空间设施现场照片</el-row>
        <el-row>
          <span class="uploaderTitle">图片上传</span>
        </el-row>
        <el-row>
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
        <el-row class="tipRow">
          提示：对重点环境应急空间与设施应采集上传照片
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelNewAdd">关闭</el-button>
        <el-button type="primary" @click="confirmNewAdd">保存</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="成家零电盘站详情"
      :visible.sync="detailDialog"
      width="40%">
      <el-form inline label-position="left" label-width="130px" :model="detailForm" style="background: #fff" class="detailFormClass">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="空间&设施名称：">
              <span>成家零电派站</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="空间&设施编号：">
              <span>13974947</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="空间&设施类型：">
              <span>闸坝</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在河流：">
              <span>衡阳河</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="坐标：">
              <span>12324.899,23234.2323</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址：">
              <span>广东</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="蓄水量（万立方米）：">
            <span>8900</span>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="备注：">
            <span>无</span>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建人员：">
              <span>由于西</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建账号：">
              <span>24222</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="创建单位：">
            <span>九江生态据</span>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="修改人：">
              <span>李四</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="修改账号：">
              <span>24222</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="修改单位：">
            <span>九江生太局</span>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建时间：">
              <span>2022-22-22 22:33:33</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="更新时间：">
              <span>2022-22-22 22:33:33</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="color: #333333; font-weight: 600; font-size: 14px;">附件</el-row>
        <div class="enclosureClass">
          图片区
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'emergencySpaceAndFacilities',
  data() {
    return {
      searchForm: {
        searchValue: '',
        searchNum: '',
        lei: '',
        qu: '',
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
      tableDataForEmergencySpace: [
        {
          kong: '成家林电派站',
          jian: 'BYH-GQ004',
          she: '闸坝',
          qu: '江西/九江/工清市',
          suo: '长江',
          he: '博洋河',
        }
      ],
      newAddDialog: false,
      newAddForm: {},
      detailDialog: false,
      detailForm: {},
    }
  },
  methods: {
    doSearch() {

    },
    doNewadd() {
      this.newAddDialog = true
    },
    doDownload() {

    },
    showDetail(row) {
      this.detailDialog = true
    },
    doEdit(row) {
      this.newAddDialog = true
    },
    doDelete(row) {

    },
    currentPageChange(row) {

    },
    cancelNewAdd() {
      this.newAddDialog = false
    },
    confirmNewAdd() {
      this.newAddDialog = false
    },
  }
}
</script>

<style lang="scss" scoped>
.el-icon-search {
  vertical-align: middle;
}
.el-icon-circle-plus-outline {
  vertical-align: middle;
}
.el-icon-folder {
  vertical-align: middle;
}

.operationBtn {
  padding: 4px 7px;
  font-size: 9px;
  border: 1px solid #B6B6B6;
}

::v-deep.spaceAdd {
  .el-form-item__label {
    padding: 0;
  }
}
::v-deep .formItemPlan {
  width: 100%;
}
::v-deep.el-form-item  {
  margin-bottom: 0;
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
.titleForPhoto {
  font-size: 14px;
  color: #333333;
  padding: 10px 0;
}
.uploaderTitle {
  color: #323233;
  font-size: 16px;
  font-weight: 600;
}
.tipRow {
  font-size: 14px;
  font-weight: 400;
  color: #EC592E;
  margin-top: 16px;
}
::v-deep.detailFormClass {
  .el-form-item__label {
    color: #666666 ;
  }
  span {
    color: #333333;
    font-weight: bold;
  }
}
.enclosureClass {
  height: 200px;
  width: 100%;
  background: pink;
}
</style>
