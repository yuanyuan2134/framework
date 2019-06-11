import * as utils from './base';  //基础工具方法
import clipboard from './clipboard';  //剪切板
import eventHub from './eventHub';   //全局事件中心
import print from './print';   //打印工具箱
import validate from './validate';   //验证工具箱

export default Object.assign(utils, {
  clipboard,
  eventHub,
  print,
  validate
})