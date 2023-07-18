<template>
  <div class="right_content_overflow">
    <el-card class="card-box">
      <div class="content-echarts" id="echartContainer"></div>
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
            prop="quxian"
            label="区县"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="yi"
            label="未填报企业名称"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="wei"
            label="已填报企业名称"
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
import { callbackify } from 'util'
export default {
  name: 'completionOfEnterpriseFiling',
  data() {
    return {
      searchForm: {
        county: '',
      },
      tableDataForCountyList: [
        {
          quxian: '武宁县',
          yi: '德兰化工有限公司',
          wei: '缓建有限公司',
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
      pieE: null,
    }
  },
  mounted() {
    this.showEcharts()
  },
  methods: {
    showEcharts() {
      // var echarts = this.$echarts.init(document.getElementById('echartContainer'))
      var echartsImg = echarts.init(document.getElementById('echartContainer'))
      let that = this
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
            var allEnterprise = param[0].data
            var alreadyEnterprise = param[0].data - param[1].data
            var notAlreadyEnterprise = param[1].data
            var alreadyPercent = parseInt((alreadyEnterprise / allEnterprise) * 100)
            // console.log(alreadyPercent);
            let str = `<div style='background: #FFFFFF; width:260px; height:154px;'>
              <p style='color: #000000;font-weight: 500;font-size: 14px; padding:10px 0 6px 10px;'>${param[0].name}</p>
              <div style='width: 60%; height: 116px; float: left; padding:10px 0 0 10px; background: #FFFFFF;'>
                <p style='margin-bottom: 10px; color: #000000;'><span>企业总数:</span> <span style='color: #0274F9;'>${allEnterprise}</span></p>
                <p style='margin-bottom: 10px; color: #000000;'><span>已填报企业数:</span> <span style='color: #1DB9B6;'>${alreadyEnterprise}</span></p>
                <p style='margin-bottom: 10px; color: #000000;'><span>未填报企业数:</span> <span style='color: #FA9B02;'>${notAlreadyEnterprise}</span></p>
              </div>
              <div style='width: 40%; height: 116px; background: #FFFFFF; float:left;'>
                <div id='pie' style='width: 100%; height: 70px; background: #ffffff;'>
                  
                </div>
                <div style='width: 100%; height: 40px; color: #666666; text-align: center;'>
                  完成率
                </div>
              </div>
            </div>`
            callback(that.showPie(notAlreadyEnterprise, alreadyEnterprise, alreadyPercent))
            return str
          }
        },
        legend: {
          data: ['风险企业总数', '未填报企业数'],
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
            name: '风险企业总数',
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
            name: '未填报企业数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              4.0, 1.9, 6.0, 23.2, 25.6, 56.7, 35.6, 62.2, 32.6, 40.0, 61.4, 32.3
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
                offset: 0, color: 'rgba(247, 202, 70, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(247, 176, 41, 1)' // 100% 处的颜色
            }],
          },
        ]
      };

      echartsImg.setOption(option)
    },
    showPie(notAlready, already, percent) {
      this.$nextTick(() => {
        if (!document.getElementById('pie')) return
        this.pieE = echarts.init(document.getElementById('pie'))
        this.pieE.clear()
        this.setPie(notAlready, already, percent)
      })
    },
    setPie(notAlready, already, percent) {

      let color1 = new echarts.graphic.LinearGradient(0,1,0,0,[{offset: 0, color: '#0098FA'}, {offset: 1, color: '#026FF9'}], false)
      let color2 = new echarts.graphic.LinearGradient(0,1,0,0,[{offset: 0, color: '#D5E3ED'}, {offset: 1, color: '#D5E3ED'}], false)
      
      let pieOption = {
        title: {
          show: true,
          text: `${percent}%`,
          x: 'center',
          y: 'center',
        },
        tooltip: {
          show: false,
          trigger: 'item'
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'percentEcharts',
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { 
                value: already,
                name: 'already',
                // itemStyle: {
                //   normal: {
                //     color: {
                //       type: 'linear',
                //       x: 0,
                //       y: 0,
                //       x2: 1,
                //       y2: 1,
                //       colorStops: [
                //         { offset: 0, color: '#0098FA' },
                //         { offset: 1, color: '#026FF9' }
                //       ]
                //     },
                //   }
                // }
              },
              { 
                value: notAlready,
                name: 'notAlready',
                // itemStyle: {
                //   normal: {
                //     color: {
                //       type: 'linear',
                //       x: 0,
                //       y: 0,
                //       x2: 1,
                //       y2: 1,
                //       colorStops: [
                //         { offset: 0, color: '#D5E3ED' },
                //         { offset: 1, color: '#D5E3ED' }
                //       ]
                //     },
                //   }
                // }
              },
            ],
          }
        ],
        color: [color1, color2]
      };
      this.pieE.setOption(pieOption)
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
