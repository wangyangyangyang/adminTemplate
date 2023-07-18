<template>
  <el-card>
    <div class="content-box">
        <div class="table_in">
           <el-button type="primary"
            >提交 <el-divider direction="vertical"></el-divider
            ><i class="el-icon-circle-plus-outline el-icon--right"></i
          ></el-button>
        </div>
      <el-form
        label-position="right"
        :model="formInline"
        ref="addcustform"
        size="mini"
        inline 
        class="formStyle"
        label-width="150px"
      >
        <el-form-item label="排查单位名称">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="排查时间">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
         <el-form-item label="详细地址" >  
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
         <el-form-item label="经度">
          <el-input
            v-model="formInline.longitude"
            placeholder=""
          ></el-input>
        </el-form-item>
         <el-form-item label="纬度">
          <el-input
            v-model="formInline.latitude"
            placeholder=""
          ></el-input>
        </el-form-item>
          <!-- <mapTab
          ref="mapTab"
          @getMapData="setDataUde"
        /> -->
        <div id="container">
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
         
         <el-form-item label="隐患排查问题描述">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
         <el-form-item label="是否需要整改">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
           <el-form-item label="整改截止日期">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
         <el-form-item label="隐患排查文件">
          <el-input
            v-model="formInline.fileName"
            placeholder=""
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
// import verify from "@/utils/verify";
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
let Geocoder; //先声明变量，
export default {
  components: {
  
  },
  data() {
    let self = this
    return {
      formInline: {
        fileName:'',
        longitude:'',
        latitude:'',
         center: [119.72899, 30.254775], // marker定位点,可改变样式
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
  },
  methods: {
    // 修改点位后
    setDataUde(data) {
      this.formInline = JSON.parse(JSON.stringify(this.formInline));
      this.formInline.longitude = data.longitude;
      this.formInline.latitude = data.latitude;
    },
    // 修改接收数据
    setData(data) {
      this.formInline = JSON.parse(JSON.stringify(data));
      this.formInline = Object.assign(this.formInline, data);
      this.centerDialogVisible = true;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file) {},

    // 提交
    onSubmit() {
      this.$refs.addcustform.validate((valid) => {
        if (valid) {
          let data = JSON.parse(JSON.stringify(this.formInline));
          this.$emit("getAddData", data);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.formStyle{
    background: #fff !important;
    .el-form .el-input__inner{
        width:350px !important;
    }
    .el-form .el-input--mini .el-input__inner{
        width:500px !important; 
    }
   
    .address{
        .el-input__inner{
            width:700px !important;
        }
    }
}


.el-form-item--mini.el-form-item{
    width:45% !important;

}
::v-deep .el-form-item--mini .el-form-item__content{
    width:calc(100% - 150px) !important;
}
.table_in{
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
}
#container{
  width:100%;
  height:400px;
  margin-bottom: 90px;
}
</style>
