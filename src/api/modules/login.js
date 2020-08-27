import request from '../request'
import requestURL from '../requestUrl'
import requestParam from '../requestParam'
import Qs from 'qs'

//登陆
export function login(params) {
  return request({
    method: 'post',
    url: requestURL('/bs/dx'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}

//验证码
export function verifi(params) {
  return request({
    method: 'post',
    url: requestURL('/v1/api/code'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}
