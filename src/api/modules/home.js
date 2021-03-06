import request from '../request'
import requestURL from '../requestUrl'
import requestParam from '../requestParam'
import Qs from 'qs'

//投票列表
export function insert(params) {
  return request({
    method: 'post',
    url: requestURL('/dx/vt'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}

//投票
export function myd(params) {
  return request({
    method: 'post',
    url: requestURL('/bp/myd'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}

//排行榜
export function phb(params) {
  return request({
    method: 'post',
    url: requestURL('/dx/phb'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}
