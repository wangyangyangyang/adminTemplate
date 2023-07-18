<template>
  <div class="right_content_overflow">
    <el-card class="cardBox">
      <el-row :gutter="10" style="height: 100%;">
        <el-col :span="4" style="height: 100%;">
          <div class="leftContainer">
            <!-- <el-date-picker
              v-model="date"
              type="date"
              style="width: 100%"
              placeholder="选择日期">
            </el-date-picker> -->
            <div class="addPeo">
              <span></span> 添加月度值班人员
            </div>
            <div class="leader per">
              <span></span> 值班领导
            </div>
            <div class="staff per">
              <span></span> 值班员工
            </div>
          </div>
        </el-col>
        <el-col :span="20" style="height: 100%;">
          <div class="rightContainer">
            <div class="containerHeader">
              <div class="controlBox">
                <span class="leftYear eve" @click="leftArrowYear">&lt;&lt;</span>&nbsp;&nbsp;&nbsp;
                <span class="leftMonth eve" @click="leftArrowMonth">&lt;</span>&nbsp;&nbsp;
                <span>{{titleYear}}年{{titleMonth}}月</span>&nbsp;&nbsp;
                <span class="rightMonth eve" @click="rightArrowMonth">&gt;</span>&nbsp;&nbsp;&nbsp;
                <span class="rightYear eve" @click="rightArrowYear">&gt;&gt;</span>
              </div>
              <div class="tool">
                <el-button @click="doExport">列表导出</el-button>
                <el-button @click="doImport">列表导入</el-button>
                <el-button type="primary" @click="doDownload">模板下载</el-button>
              </div>
            </div>
            <div class="calendar">
              <el-calendar v-model="value">
                <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                <template
                  slot="dateCell"
                  slot-scope="{date, data}">
                  <div>
                    <!-- <p :class="data.isSelected ? 'is-selected' : ''">
                      {{ data.day.split('-').slice(1)[1] }} {{ data.isSelected ? '✔️' : ''}}
                      <br />
                      <span>zhangsan</span>
                      <br>
                      <span>lisi</span>
                    </p> -->
                    <div class="calendarCellContainer">
                      <div class="calendarDayHeader">
                        <span>{{ data.day.split('-').slice(1)[1] }} 初六</span>
                        <span @click="viewDayWork(date,data)" style="color: #C0C4CC;">
                          <span v-if="data.day.split('-').slice(1)[1] > 15"><i class="el-icon-edit"></i>修改</span>
                          <span v-else><i class="el-icon-plus"></i>添加</span>
                        </span>
                      </div>
                      <div class="calendarContent">
                        <p>值班领导：张三</p>
                        <p>值班人员：李四</p>
                      </div>
                    </div>
                  </div>
                </template>
              </el-calendar>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="值班修改"
      :visible.sync="cellVisible"
      width="30%">
      <div class="dialogContent">
        <el-form :model="cellForm" label-position="left" label-width="90px" style="background: #fff; padding: 0 112px;">
          <el-row style="margin-bottom: 16px;">
            <el-date-picker
              v-model="cellForm.date"
              type="date"
              style="width: 100%;"
              placeholder="选择日期">
            </el-date-picker>
          </el-row>
          <el-form-item label="值班领导：">
            <el-input v-model="cellForm.dutyLeader" placeholder="用户名不超过9个字"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="cellForm.dutyLeaderPhone" placeholder="电话系统自带"></el-input>
          </el-form-item>
          <el-form-item label="值班员工：">
            <el-input v-model="cellForm.dutyStaff" placeholder="用户名不超过9个字"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="cellForm.dutyStaffPhone" placeholder="电话系统自带"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">提交</el-button>
        <el-button @click="cancel">返回</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'dutyManagement',
  data() {
    return {
      date: '',
      value: '',
      cellVisible: false,
      titleYear: '',
      titleMonth: '',
      cellForm: {
        date: '',
        dutyLeader: '',
        dutyLeaderPhone: '',
        dutyStaff: '',
        dutyStaffPhone: '',
      },
    }
  },
  mounted() {
    const DATE = new Date()
    this.titleYear = DATE.getFullYear()
    this.titleMonth = DATE.getMonth() + 1
  },
  methods: {
    doExport() {
      alert('eee')
    },
    doImport() {
      alert('rrr')
    },
    doDownload() {
      alert('aaa')
    },
    leftArrowYear() {
      alert('向左一年')
    },
    leftArrowMonth() {
      alert('向左一月')
    },
    rightArrowMonth() {
      alert('向右一月')
    },
    rightArrowYear() {
      alert('向右一年')
    },
    viewDayWork(date,data) {
      console.log(data);
      this.cellVisible = !this.cellVisible
      this.cellForm.date = data.day
    },
    confirm() {
      this.cellVisible = false
    },
    cancel() {
      this.cellVisible = false
    },
  },
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
  // background: pink;
  background: #FFFFFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.addPeo {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('~@/views/components1/assets/add_peo.png') no-repeat;
  }
}
.leader {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('~@/views/components1/assets/flag_leader.png') no-repeat;
  }
}
.staff {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('~@/views/components1/assets/flag_staff.png') no-repeat;
  }
}
.per {
  margin-top: 16px;
  cursor: pointer;
}

.rightContainer {
  height: 100%;
  width: 100%;
  // background: pink;
  background: #FFFFFF;
  .containerHeader {
    height: 68px;
    line-height: 68px;
    text-align: center;
    position: relative;
    font-size: 16px;
    .controlBox {
      .eve {
        cursor: pointer;
      }
    }
    .tool {
      position: absolute;
      top: 0px;
      right: 16px;
    }
  }
  .calendar {
    text-align: center;
    height: calc(100% - 68px);
    .el-calendar {
      height: 100%;
    }
    ::v-deep .el-calendar__header {
      display: none;
    }
    ::v-deep.el-calendar__body {
      height: 100%;
      padding-bottom: 20px;
      ::v-deep table.el-calendar-table {
        height: 100%;
      }
    }

    .calendarCellContainer {
      height: 100px;
      text-align: left;
      padding: 6px 12px;
      .calendarDayHeader {
        height: 20%;
        display: flex;
        justify-content: space-between;
      }
      .calendarContent {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: stretch;
        p {
          height: 28px;
          line-height: 28px;
          padding-left: 10px;
          &:nth-child(1) {
            font-size: 14px;
            font-weight: 500;
            color: #2A89E1;
            background: linear-gradient(to right, #2A89E1 0%, #2A89E1 2%, rgba(42, 137, 225, 0.1) 2%, rgba(42, 137, 225, 0.1) 100%);
          }
          &:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
            color: #239275;
            background: linear-gradient(to right, #239275 0%, #239275 2%, rgba(35, 146, 117, 0.1) 2%, rgba(35, 146, 117, 0.1) 100%);
          }
        }
      }
    }
  }
}

::v-deep.calendar .el-calendar__body table {
  height: 100%;
}

::v-deep.calendar .el-calendar__body .el-calendar-day {
  height: 100%;
  padding: 0;
}
::v-deep.calendar .el-calendar__body .el-calendar-day div {
  height: 100%;
}

</style>
