import { logout, getUserInfo, getUserId, login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/system/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    userInfo: null
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UNIACID:(state, uniacid) =>{
      state.uniacid = uniacid
    },
    SET_NAME: (state, name) => {
      localStorage.setItem('name', name);
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER_INFO: (state, userInfo) => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = userInfo
    }
  },

  actions: {
    // //用户名登录
    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       const token = response.data.data
    //       commit('SET_TOKEN', token)
    //       setToken(token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 用户名登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          if(response.accessToken){
            commit('SET_TOKEN', response.accessToken);
            setToken(response.accessToken);
          }
          if(response.info){
            const user = JSON.parse(response.info);
            if(user){
              // commit('SET_ROLES', ['shop'])
              commit('SET_NAME', user.userName)
              commit('SET_AVATAR', user.picUrl)
              commit('SET_INTRODUCTION', user.remark)
              commit('SET_USER_INFO', user)
            }
          }
          // const token = response.data.data
          // commit('SET_TOKEN', token)
          // setToken(token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data.data

          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户分类
    GetUserId({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserId(state.token).then(response => {
          const uniacid = response.data.data
          commit('SET_UNIACID', uniacid)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user
