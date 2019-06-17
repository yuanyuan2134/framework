import request from '@/system/request'

/* 新的登录接口 */
export function login(data) {
  return request({
    target: 'MANAGER-API-100',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post',
    baseURL: process.env.BASE_API
  })
}

export function getUserInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token },
    baseURL: process.env.BASE_API
  })
}

export function getUserId(token) {
  return request({
    url: '/saas/getUniacid',
    method: 'get',
    params: { token },
    baseURL: process.env.BASE_API
  })
}

