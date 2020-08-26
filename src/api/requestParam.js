import qs from 'qs';
import merge from 'lodash/merge';

/**
 * 请求参数统一处理／组装
 * @param {*} params 参数对象
 * @param {*} requestType 类型
 * @param {*} openDefaultParams 是否开启默认参数?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
export default function (params, requestType, openDefaultParams, contentType) {
    // 默认参数
    var defaults = {
        't': new Date().getTime()
    };
    params = openDefaultParams ? merge(defaults, params) : params;
    params = requestType === 'post' ? (contentType === 'json' ? JSON.stringify(params) : contentType === 'form' ? qs.stringify(params) : params) : params;
    return params;
}
