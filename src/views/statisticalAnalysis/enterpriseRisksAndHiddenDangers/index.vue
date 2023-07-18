<template>
  <div class="right_content_overflow">
    <el-card class="card-box">
      <div class="content-echarts">
        <div class="search-box">
          <el-form inline :model="echartsForm" style="background: #ffffff;">
            <el-form-item label="">
              <el-select v-model="echartsForm.leiBie" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="echartContainer" id="echartContainer"></div>
      </div>
      <div class="content-table">
        <el-form inline :model="searchForm" style="background: #ffffff;">
          <el-form-item label="区县：">
            <el-select v-model="searchForm.county" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="隐患排查类型：">
            <el-select v-model="searchForm.dangersType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
            <el-button type="primary" @click="doExport">导出 &nbsp;|<i class="el-icon-upload2 el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="tableDataForCountyList"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            prop="quhua"
            label="行政区划"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="qiye"
            label="专项排查企业"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="dizhi"
            label="详细地址"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="dengji"
            label="企业风险等级"
            min-width="120">
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
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'enterpriseRisksAndHiddenDangers',
  data() {
    return {
      searchForm: {
        county: '',
        dangersType: '',
      },
      echartsForm: {
        leiBie: '1',
      },
      options1: [
        {
          label: '专项排查',
          value: '1',
        },
        {
          label: '综合排查',
          value: '2',
        },
        {
          label: '日常排查',
          value: '2',
        },
      ],
      tableDataForCountyList: [
        {
          quhua: '武宁县',
          qiye: '毋宁企业',
          dizhi: '德兰化工有限公司',
          dengji: '中风险',
        }
      ],
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
    }
  },
  mounted() {
    this.showEcharts()
  },
  methods: {
    showEcharts() {
      var echartsImg = echarts.init(document.getElementById('echartContainer'))

      var option = {
        grid: {
          left: 40,
          right:40,
          top: 30,
          buttom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ['line', 'bar'] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        legend: {
          data: ['排查总数', '综合排查', '日常排查'],
          bottom: 10,
        },
        xAxis: [
          {
            type: 'category',
            data: ['市辖区', '丙烯区', '浔阳区', '武宁县', '修水县', '永修县', '庐山市'],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '超标率（%）',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: '#DEDEDE'
              }
            }
          },
        ],
        series: [
          {
            name: '排查总数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          }
        ],
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(91, 197, 238, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(81, 158, 248, 1)' // 100% 处的颜色
            }],
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(97, 218, 144, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(26, 179, 130, 1)' // 100% 处的颜色
            }],
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(246, 204, 130, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(235, 169, 47, 1)' // 100% 处的颜色
            }],
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(249, 150, 74, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(236, 108, 45, 1)' // 100% 处的颜色
            }],
          },
        ]
      };

      echartsImg.setOption(option)
    },
    doSearch() {

    },
    currentPageChange() {

    },
    doExport() {

    },
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  height: 100%;
}
::v-deep .card-box .el-card__body {
  height: 100%;
}

.content-echarts {
  height: 55%;
  background: #ffffff;
  padding: 10px;
  margin-bottom: 16px;
  .search-box {
    height: 54px;
  }
  .echartContainer {
    height: calc(100% - 54px);
  }
}
.content-table {
  height: calc(45% - 16px);
  background: #ffffff;
  padding: 18px;
}

.el-icon-upload2 {
  vertical-align: middle;
}
.el-icon-search {
  vertical-align: middle;
}
</style>
