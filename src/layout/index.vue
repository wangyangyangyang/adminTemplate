<template>
  <div :class="classObj" class="app-wrapper" :style="{'--current-color': theme}">
     <div  class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <!-- <navbar /> -->
        <TopNav id="topmenu-container"  v-if="topNav" />
      </div>
      <app-main />
    </div>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    
    <sidebar  class="sidebar-container" />
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import TopNav from '@/components/TopNav'

import ResizeMixin from './mixin/ResizeHandler'
import { mapState,mapGetters } from 'vuex'
import variables from '@/assets/styles/variables.scss'
const defaultSettings = require("@/settings.js");
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TopNav
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(["sidebar", "avatar", "device"]),
    ...mapState({
      theme: state => state.settings.theme,
      sideTheme: state => state.settings.sideTheme,
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    variables() {
      return variables;
    },
    topNav: {
      get() {
        console.log(this.$store.state.settings.topNav,'this.$store.state.settings.topNav')
        return this.$store.state.settings.topNav
      }
    }
  },
  methods: {
    handleClickOutside() {
      console.log('左侧菜单伸展')
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixin.scss";
  @import "~@/assets/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width:100vw;
    transition: width 0.28s;
    background: #030C1F;
  }

  .hideSidebar .fixed-header {
    width: 100vw;
  }

  .sidebarHide .fixed-header {
    width: 100%;
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
