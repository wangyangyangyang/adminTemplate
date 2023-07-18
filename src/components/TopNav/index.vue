<template>
<div class="come_header">
  <div class="user">
    <span>{{ userInfo.realname || "admin" }}</span>
    <span>|</span>
    <span class="pointer" @click="onBack">返回</span>
    <span>|</span>
    <span class="pointer" @click="onLogout">退出</span>
  </div>
  <div class="header">
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
      @select="handleSelect"
      class="menu-left"
    >
      <el-menu-item
        class="left_li"
        :class="{ l_active: currentIndex == item.path }"
        :index="item.path"
        :key="index"
        v-for="(item, index) in org.left"

      >
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu>
    <div class="header_title">
      <div class="titleCN">环境风险防控与应急管理系统</div>
      <div class="titleEN">
        Environmental risk prevention and control and emergency managementsystem
      </div>
    </div>
    <!-- 右侧菜单 TODO:暂时注释-->
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
      @select="handleSelect"
      class="menu-right"
    >
      <el-menu-item
        v-for="(item, index) in org.right"
        :class="{ r_active: currentIndex == item.path }"
        :index="item.path"
        :key="index+'a'"
        class="right_li"

      >
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</div>
  
</template>

<script>
import { constantRoutes } from "@/router";
import {removeToken} from "@/utils/auth"
// 隐藏侧边栏路由
const hideList = ["/index", "/user/profile"];

export default {
  data() {
    return {
      // 顶部栏初始数
      // visibleNumber: 5,
      // 当前激活菜单的 index
      currentIndex: undefined,
      // 是否为首次加载
      isFrist: false,
      // 用户信息
      userInfo: {},
    };
  },
  computed: {
    // 顶部显示菜单
    org() {
      let topMenus = [];
      this.routers.map((menu) => {
        if (menu.hidden !== true) {
          // 兼容顶部栏一级菜单内部跳转
          if (menu.path === "/") {
            topMenus.push(menu.children[0]);
          } else {
            topMenus.push(menu);
          }
        }
      });
      let position = (topMenus.length - 1) / 2;
      let leftMenu = topMenus.slice(0, position + 1);
      let rightMenu = topMenus.slice(position + 1);
      let org = new Object();
      org.left = leftMenu;
      org.right = rightMenu;
      return org;
    },
    // 所有的路由信息
    routers() {
      console.log(this.$store.state.permission.topbarRouters,'topbar ==路由')
      return this.$store.state.permission.topbarRouters;
    },
    // 设置子路由
    childrenMenus() {
      var childrenMenus = [];
      this.routers.map((router) => {
        for (var item in router.children) {
          if (router.children[item].parentPath === undefined) {
            if (router.path === "/") {
              router.children[item].path =
                "/redirect/" + router.children[item].path;
            } else {
              if (!this.ishttp(router.children[item].path)) {
                router.children[item].path =
                  router.path + "/" + router.children[item].path;
              }
            }
            router.children[item].parentPath = router.path;
          }
          childrenMenus.push(router.children[item]);
        }
      });
      return constantRoutes.concat(childrenMenus);
    },
    // 默认激活的菜单
    activeMenu() {
      const path = this.$route.path;
      console.log(path,'path====1111',path.lastIndexOf("/") > 0)
      let activePath = this.routers[0].path;
      console.log(activePath,'activePath')
      if (path.lastIndexOf("/") > 0) {
        const tmpPath = path.substring(1, path.length);
        activePath = "/" + tmpPath.substring(0, tmpPath.indexOf("/"));
      } else if ("/index" == path || "" == path) {
        if (!this.isFrist) {
          this.isFrist = true;
        } else {
          // activePath = "index";
        }
      }          
      var routes = this.activeRoutes(activePath);
      if (routes.length === 0) {
        activePath = this.currentIndex || this.routers[0].path;
        this.activeRoutes(activePath);
      }
      return activePath;
    },
  },

  mounted() {
    // this.setVisibleNumber();
    console.log(this.routers, "this.routers");
    let user = localStorage.getItem('pro__Login_Userinfo') || JSON.stringify({})
    this.userInfo = JSON.parse(user)
  },
  methods: {
    // 菜单选择事件
    handleSelect(key, keyPath) {
      console.log(key, "菜单选择事件");
      this.currentIndex = key;
      if (this.ishttp(key)) {
        // http(s):// 路径新窗口打开
        window.open(key, "_blank");
      } else if (key.indexOf("/redirect") !== -1) {
        // /redirect 路径内部打开
        this.$router.push({ path: key.replace("/redirect", "") });
      } else {
        // 显示左侧联动菜单
        this.activeRoutes(key);
        // let myRoutes = [];
        // if (this.childrenMenus && this.childrenMenus.length > 0) {
        //   this.childrenMenus.map((item) => {
        //     if (key == item.parentPath || (key == "index" && "" == item.path)) {
        //       myRoutes.push(item);
        //     }
        //   });
        // }
        // setTimeout(() => {
        //   if (myRoutes[0].path != this.$route.path) {
        //     this.$router.replace({
        //       path: myRoutes[0].path,
        //     });
        //   } else {
        //     this.$router.replace({
        //       path: "/index",
        //     });
        //   }
        // }, 100);
      }
    },
    // 当前激活的路由
    activeRoutes(key) {
      console.log(key, "当前激活的路由");
      var routes = [];
      if (this.childrenMenus && this.childrenMenus.length > 0) {
        this.childrenMenus.map((item) => {
          if (key == item.parentPath || (key == "index" && "" == item.path)) {
            routes.push(item);
          }
        });
      }
      if (routes.length > 0) {
        console.log(routes,'存进左侧菜单')
        this.$store.commit("SET_SIDEBAR_ROUTERS", routes);
        // if(click){
        //   this.$router.push({path:routes[0].path})
        // }
      }
      return routes;
    },
    ishttp(url) {
      return url.indexOf("http://") !== -1 || url.indexOf("https://") !== -1;
      
    },
    onBack() {
     window.location.href="http://106.225.177.204:8082/jiujiang/#/platform"
      removeToken()
    },
    onLogout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          // location.href = '/index';
        })
      }).catch(() => {});
    },
  },
};
</script>

<style lang="scss">
.topmenu-container.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 50px !important;
  line-height: 50px !important;
  color: #999093 !important;
  padding: 0 5px !important;
  margin: 0 10px !important;
}
.topmenu-container.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none !important;
  color: #fff;
}

/* submenu item */
.topmenu-container.el-menu--horizontal > .el-submenu .el-submenu__title {
  float: left;
  height: 50px !important;
  line-height: 50px !important;
  color: #ffffff !important;
  padding: 0 5px !important;
  margin: 0 10px !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu {
  background: none;
}
.titleCN {
  font-size: 30px;
  font-weight: normal;
  color: #ffffff;
  line-height: 35px;
  letter-spacing: 3px;
  background: linear-gradient(180deg, #ffffff 0%, #b2ccfc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.titleEN {
  font-size: 11px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  letter-spacing: -1px;
}
::v-deep .topmenu-container.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: none !important;
}
.el-menu--horizontal > .el-menu-item.is-active{
  border-bottom: none;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal .el-menu-item:not(.is-disabled):focus{
  color:#fff;
}
.el-menu--horizontal > .el-menu-item.is-active{
  color:#fff;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus{
  background-color: transparent !important;
}
::v-deep .el-menu--horizontal > .el-menu-item {
  line-height: 33px !important;
  color: #fff !important;
  border-bottom: none !important;
}
.el-menu--horizontal > .el-menu-item{
 border-bottom: none !important;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90px;
  background: url("../../assets/images/topHeader.png") no-repeat;
  background-size: contain;
  background-position: top;
  transition: all 1.5s;
}
ul {
  list-style-type: none;
}
.menu-left {
  justify-content: flex-end;
  margin-top: 50px;
  display: flex;
  align-items: flex-end;
  width: 440px;
  .left_li {
    min-width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin-left: -10px;
    background: url("../../assets/images/btn-l.png") no-repeat;
    background-size: cover;
  }
  .l_active {
    background: url("../../assets/images/btn-l-a.png") no-repeat;
    background-size: cover;
  }
}
.menu-right {
  justify-content: flex-start;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  width: 440px;
  padding-left: 0;
  .right_li {
    min-width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin-right: -10px;
    background: url("../../assets/images/btn-r.png") no-repeat;
    background-size: cover;
  }
  .r_active {
    background: url("../../assets/images/btn-r-a.png") no-repeat;
    background-size: cover;
  }
}
.header_title {
  width: 550px;
  text-align: center;
}
::v-deep .topmenu-container.el-menu--horizontal > .el-menu-item {
  height: 0 !important;
  line-height: 0 !important;
  border-bottom: none;
  color:#fff;
}
::v-deep .el-menu-item {
  height: 56px !important;
  color: #fff;
  line-height: 0;
}

.come_header {
  width: 100vw;
  height: 90px;
  position: relative; 
  .user {
    position: absolute;
    top: 10px;
    right: 40px;
    span {
      margin-left: 10px;
    }
  }
}
</style>
