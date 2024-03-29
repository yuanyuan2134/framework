/* 字段对应描述配置 */
export default {
  order: {
    allOrderStatus: {
      "1": "待付款",
      "2": "待发货",
      "3": "待收货",
      "4": "已完成",
      "5": "已关闭",
      "9": "已评论",
      "6": "待备货",
      "7": "待核销",
      "8": "已核销",
    },
    saleOrderStatus: {
      "1": "待付款",
      "2": "待发货",
      "3": "待收货",
      "4": "已完成",
      "5": "已关闭",
      "9": "已评论",
      "6": "待备货",
      "7": "待核销",
      "8": "已核销",
    },
    selfOrderStatus: {
      "1": "待付款",
      "2": "待发货",
      "3": "待收货",
      "4": "已完成",
      "5": "已关闭",
      "9": "已评论",
      "6": "待备货",
      "7": "待核销",
      "8": "已核销",
    },
    afterSaleOrderStatus: {
      "2": "待发货",
      "3": "待收货",
      "4": "已完成",
      "1": "待处理",
      "5": "已关闭",
      "9": "已评论",
      "8": "已发货",
      "7": "已拒绝",
      "6": "已拒收",
    },
    payWayId: {
      "0": "全部",
      "1": "未支付",
      "2": "微信支付",
      "3": "余额支付",
      "4": "支付宝支付",
      "5": "银联支付",
      "6": "货到付款"
    },
    channelInfoId: {
      "1": "微信小程序",
      // "2": "公众号",
      // "3": "H5"
    },
    deliveryWay: {
      "1": "快递物流",
      "2": "自提"
    },
    serviceType: {
      "1": "换货",
      "2": "退货退款"
    },
    enable: {
      "0": "关闭",
      "1": "开启"
    },
    isDefault: {
      "1": "是",
      "0": "否"
    },
    chargeType: {
      "1": "按件计费"
    },
    isSaleTypes:{
      "0": "未上架",
      "1": "已上架"
    },
  }
};
