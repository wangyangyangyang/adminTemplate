import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import axios from "axios";

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: [],
    routers: "",  
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_ROUTERS: (state, routers) => {
      state.routers = routers;
      // localStorage.setItem('allPermis', JSON.stringify(allPermis))
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      // const password = userInfo.password
      // const code = userInfo.code
      // const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {

        // login(username, password, code, uuid).then(res => {
        //   setToken(res.token)
        //   commit('SET_TOKEN', res.token)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
        let ip ="http://106.225.177.204:8082/jiujiang"
        let redirect = location.href.split("?")[0];
        redirect = encodeURIComponent(redirect);
        let url = ip + "/#/login?redirect=" + redirect;
        window.location.href = url;
        console.log(url)
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', ['ROLE_DEFAULT'])
        // getInfo().then(res => {
        //   const user = res.user
        //   const avatar = (user.avatar == "" || user.avatar == null) ? require("@/assets/images/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
        //   if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        //     commit('SET_ROLES', res.roles)
        //     commit('SET_PERMISSIONS', res.permissions)
        //   } else {
        //     commit('SET_ROLES', ['ROLE_DEFAULT'])
        //   }
        //   commit('SET_NAME', user.userName)
        //   commit('SET_AVATAR', avatar)
        //   resolve(res)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 退出系统
    LogOut({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          removeToken()
          dispatch('Login')
          resolve()
        }).catch(error => {
          reject(error)
        })
       
        })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
