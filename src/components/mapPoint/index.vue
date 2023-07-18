<template>
     <div id="container">
        <div class="input-item">
            <el-form 
            label-position="right"
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            ref="addcustform"
            size="mini">
            <el-form-item
        label-width="100px"
        v-for="(item, index) in itemData"
        :key="index"
        :label="item.label"
        :prop="item.value"
        :verify="item.rule ? getVerify(item.rule) : ''"
        :alias="`${item.label}:`"
      >
      <el-input
          :disabled="item.disabled == 'true' && isEdit"
          v-model="formInline[item.value]"
          :placeholder="`请输入${item.label}`"
          :maxlength="item.maxLength"
        ></el-input>
      </el-form-item>
                
                  <el-form-item >
                    <!-- <el-button type="primary" @click="submit">确定</el-button> -->
                 </el-form-item>
            </el-form>
        </div>
        <el-amap 
        ref="map" 
        :amap-manager="amapManager"
        :events="events"
        :center="formInline.center"
        expandZoomRange="true"
        :plugin="plugins"
        :pitch="66">
        <el-amap-marker :position="formInline.center"></el-amap-marker>
        </el-amap>
     </div>
</template>

<script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
let Geocoder; //先声明变量，
export default {
  name: "mapTab",
  // mixins: [verify],
  props: {
    itemData: {
      type: Array,
    },
  },

  data() {
    let self = this
    return {
      mapVisi: false,
      formInline:{
        center: [119.72899, 30.254775], // marker定位点,可改变样式
        // center:[],
      },
      amapManager,
      // TODO: 后面取值:编辑页传过来的经纬度
      lng: 0,
      lat: 0,
      events:{
          click(e){
            let { lng, lat } = e.lnglat
            self.formInline.longitude = lng
            self.formInline.latitude = lat
            self.formInline.center = [lng,lat];
          }
      },
      plugins: [
        {
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 100, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: false, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: "all",
          //地图定位按钮
          pName: "Geolocation",
        },
        {
          //左下角缩略图插件 比例尺
          pName: "Scale",
          init(o) {},
        },
        
      ],
    
    };
  },
  created() {
    // this.getList();
  },
  mounted(){
    // this.init()
  },
  methods: {
    init() {
      let tdata = {};
      this.itemData
        .map((item) => item.value)
        .forEach((item, index) => {
          tdata[item] = null;
        });
      this.formInline = tdata;
    },
    getVerify(rule) {
      return this[rule];
    },
    //显示dialog
    Show() {
      this.mapVisi = true;
    },
    unShow() {
      this.mapVisi = false;
    },
   setMapData(data) {
      this.formInline = JSON.parse(JSON.stringify(data))
      this.formInline.center= [this.formInline.longitude || 119.72899,this.formInline.latitude || 30.254775]
      this.mapVisi = true;
      this.submit()
    },
    submit(){
       let data = JSON.parse(JSON.stringify(this.formInline));
        this.$emit("getMapData", data);
        this.mapVisi = false
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-dialog__header {
  background: rgba(245, 245, 245, 1);
  // border-radius: 5px 5px 0px 0px;
  text-align: left;
  padding: 13px 20px;
  span {
    color: #57b2fa;
  }
  .el-dialog__title {
    font-size: 14px;
    letter-spacing: 2px;
  }
}
::v-deep .el-form {
  .el-input__inner {
    width: 200px;
  }
  .el-form-item {
    .el-form-item__label {
      width: 90px;
    }
    .el-input {
      width: 200px;
    }
  }
  .el-upload--picture-card{
      width:100px;
      height:100px;
      line-height: 100px;
    }
    .el-upload-list--picture-card .el-upload-list__item{
      width:100px;
      height:100px;
    }
}
#container{
  width:100%;
  height:400px;
  margin-bottom: 90px;
}
</style>
