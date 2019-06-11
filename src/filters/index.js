/* 页面过滤器 */
import Vue from 'vue'
import utils from '@/utils';

/**
 * 时间格式转换
 * @param time Date/Number
 * @param fmt string , 转换格式
 * demo ->  {{time | formatDate('yyyy-MM-dd hh:mm:ss')}}
 * 时间格式转换 用法 -> {{time | formatDate('yyyy-MM-dd hh:mm:ss')}}
 */
Vue.filter('formatDate',function (value, fmt) {
    return utils.formatDate(value, fmt);
});


/**
 * 数值百分比转换
 * @param value 
 * @param fmt string , 转换格式
 * demo ->  {{data | percent(2)}}
 */
Vue.filter('percent',function (value, fmt) {
    return `${((value || 0) * 100).toFixed(fmt || 2)}%`;
});