<template>
  <div class="right_content_overflow">
    <el-card class="card-box">
      <div class="content-echarts" id="echartsContainer">
        
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
          <el-form-item label="环境风险等级：">
            <el-select v-model="searchForm.dangersLevel" placeholder="请选择">
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
            prop="dengji"
            label="环境风险等级"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="企业名称"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="dizhi"
            label="详细地址"
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
  name: 'enterpriseEnvironmentalRiskLevel',
  data() {
    return {
      searchForm: {
        county: '',
        dangersLevel: '',
      },
      tableDataForCountyList: [
        {
          quhua: '武宁县',
          dengji: '重大',
          name: '德兰化工',
          dizhi: '九江德兰公司',
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
      var echartsImg = echarts.init(document.getElementById('echartsContainer'))

      var option = {
        grid: {
          left: 40,
          right:40,
          top: 40,
          buttom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          padding: 0,
          borderColor: '#DFDFDF',
          borderWidth: '1',
          formatter: function(param, ticket, callback) {
            // console.log(param);
            var value0 = param[2].data
            var value1 = param[1].data
            var value2 = param[0].data
            let str = `<div style='background: #FFFFFF; width:160px; height:154px;'>
              <p style='color: #000000; font-weight: 500; font-size: 14px; padding:10px 0 6px 10px;'>${param[0].name}</p>
              <div style='width: 100%; height: 116px; float: left; padding:10px 0 0 10px; background: #FFFFFF;'>
                <p style='margin-bottom: 10px; color: #000000;'><span>重大风险企业:</span> <span style='color: #0274F9;'>${value0}</span></p>
                <p style='margin-bottom: 10px; color: #000000;'><span>较大风险企业:</span> <span style='color: #1DB9B6;'>${value1}</span></p>
                <p style='margin-bottom: 10px; color: #000000;'><span>一般风险企业:</span> <span style='color: #FA9B02;'>${value2}</span></p>
              </div>
            </div>`
            return str
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
          data: ['一般风险企业数', '较大风险企业数', '重大风险企业数', '跨区域企业数'],
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
            },
            // min: 0,
            // max: 250,
            // interval: 50,
            // axisLabel: {
            //   formatter: '{value} ml'
            // }
          },
        ],
        series: [
          {
            name: '一般风险企业数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '较大风险企业数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '重大风险企业数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              6.6, 9.9, 9.0, 16.4, 2.7, 30.7, 195.6, 122.2, 148.7, 181.8, 61.0, 22.3
            ]
          },
          {
            name: '跨区域企业数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              19.6, 93.9, 90.0, 116.4, 25.7, 310.7, 105.6, 152.2, 118.7, 131.8, 91.0, 72.3
            ]
          },
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
