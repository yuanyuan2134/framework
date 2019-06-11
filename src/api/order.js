import request from '@/system/request'


/********************************************************** 订单相关  开始 ******************************************************/
// 获取订单列表
export function orderList(data) {
  return request({
    method: 'post',
    target: 'ORDER-100-PROCESSOR',
    data
  })
}

