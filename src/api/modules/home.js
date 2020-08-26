import request from '../request'
import requestURL from '../requestUrl'
import requestParam from '../requestParam'
import Qs from 'qs'

//
export function insert(params) {
  return request({
    method: 'post',
    url: requestURL('/ma/ge'),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(params)
  })
}
