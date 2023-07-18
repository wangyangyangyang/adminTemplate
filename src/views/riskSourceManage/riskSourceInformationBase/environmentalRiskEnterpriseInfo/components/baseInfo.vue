<template>
  <div class="containerBox">
    <el-descriptions class="margin-top" title="" :column="1" border :labelStyle="{fontSize: '14px', color: '#323232', width: '180px',}">
      <el-descriptions-item>
        <template slot="label">
          企业名称:
        </template>
        <el-input v-model="desForm.name"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          统一社会信用代码:
        </template>
        <el-input v-model="desForm.code"></el-input>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template slot="label">
          行政区划:
        </template>
        <el-input v-model="desForm.quhua"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          地理坐标:
        </template>
        <el-input v-model="desForm.zuobiao"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          详细地址:
        </template>
        <el-input v-model="desForm.dizhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          法定代表人:
        </template>
        <el-descriptions
          border
          :column="2"
          size="mini"
          :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
        >
          <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px'}">
            <el-input v-model="desForm.fading"></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="联系电话:">
            <el-input v-model="desForm.fadingdianhua"></el-input>
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          传真:
        </template>
        <el-descriptions
          border
          :column="2"
          size="mini"
          :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
        >
          <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px'}">
            <el-input v-model="desForm.chuanzhen"></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="电子邮箱:">
            <el-input v-model="desForm.dianzi"></el-input>
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          企业环境应急管理人员:
        </template>
        <el-descriptions  title="" direction="vertical" :column="2" border :labelStyle="{fontSize: '14px', color: '#323232', textAlign: 'center',}">
          <el-descriptions-item>
            <template slot="label">
              姓名
            </template>
            <el-input style="margin-bottom: 6px;" v-model="desForm.name1"></el-input>
            <el-input v-model="desForm.name2"></el-input>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              手机号
            </template>
            <el-input style="margin-bottom: 6px;" v-model="desForm.people1"></el-input>
            <el-input v-model="desForm.people2"></el-input>
          </el-descriptions-item>
          
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="企业风险等级:">
        <el-radio-group v-model="desForm.radio">
          <el-radio :label="1">一般</el-radio>
          <el-radio :label="2">较大</el-radio>
          <el-radio :label="3">重大</el-radio>
          <el-radio :label="4">跨区域</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item label="企业行业类别:">
        <el-input v-model="desForm.leibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急预案名称:
        </template>
        <el-input v-model="desForm.people"></el-input>
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions class="margin-top" title="" :column="1" border :labelStyle="{'width': '180px', fontSize: '14px', color: '#323232',}">
      <el-descriptions-item>
        <template slot="label">
          企业应急预案相关文件:
        </template>
        <el-input v-model="desForm.wenjian"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          应急监测方案:
        </template>
        <el-input v-model="desForm.fagnan"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          是否涉及尾矿库:
        </template>
        <el-radio-group v-model="desForm.weikuang">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库名称:
        </template>
        <el-descriptions
          border
          :column="2"
          size="mini"
          :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
        >
          <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px', 'width': '1px',}">
            <el-input v-model="desForm.kumingcheng"></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="行业类别:">
            <el-input v-model="desForm.hangye"></el-input>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          border
          :column="2"
          size="mini"
          :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
        >
          <el-descriptions-item label="服务期限:">
            <el-input v-model="desForm.qixian"></el-input>
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库地址:
        </template>
        <el-input v-model="desForm.kudizhi"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          涉及库容(万/平方m³):
        </template>
        <el-descriptions
          border
          :column="2"
          size="mini"
          :labelStyle="{'width':'100px','color': '#323232','fontSize':'14px'}"
        >
          <el-descriptions-item :labelStyle="{'padding':'0px','color': '#323232','fontSize':'14px', 'width': '1px',}">
            <el-input v-model="desForm.kurong"></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="现入库库容(万/平方m³):" :labelStyle="{'width':'200px','color': '#323232','fontSize':'14px'}">
            <el-input v-model="desForm.xiankurong"></el-input>
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库级别:
        </template>
        <el-input v-model="desForm.jibie"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库预案名称:
        </template>
        <el-input v-model="desForm.yuanmingcheng"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库企业应急预案相关文件:
        </template>
        <el-input v-model="desForm.yuanwenjian"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          尾矿库应急监测方案:
        </template>
        <el-input v-model="desForm.jiancefangan"></el-input>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  name: 'baseInfo',
  data() {
    return {
      desForm: {
        name: '',
        email: '',
        code: '',
        people: '',
        quhua: '',
        leibie: '',
        zuobiao: '',
        dizhi: '',
        fading: '',
        fadingdianhua: '',
        ren: '',
        chuanzhen: '',
        dianzi: '',
        radio: 1,
        wenjian: '',
        weikuang: 1,
        fagnan: '',
        name1: '',
        name2: '',
        people1: '',
        people2: '',
        hangye: '',
        qixian: '',
        kudizhi: '',
        kumingcheng: '',
        kurong: '',
        xiankurong: '',
        jibie: '',
        yuanmingcheng: '',
        yuanwenjian: '',
        jiancefangan: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.containerBox {
  display: flex;
  // justify-content: center;
  height: 100%;
  .margin-top {
    flex: 1, 1, auto;
    width: 50%;
  }
}
</style>
