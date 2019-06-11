import request from '@/system/request'

// 获取门店列表
export function getShopList(data) {
  return request({
    target: 'STORE-104-PROCESSOR',
    method: 'post',
    data
  })
}

// 获取所有门店列表
export function orderList1(data) {
  return request({
    target: 'STORE-105-PROCESSOR',
    method: 'post',
    data
  })
}

// 创建门店
export function createShop(data) {
  return request({
    target: 'STORE-100-PROCESSOR',
    method: 'post',
    data
  })
}