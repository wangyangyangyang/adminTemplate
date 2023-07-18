import request from '@/utils/request'

export default class emergencyManagementApi {
  static page(data) {
    return request({
      url: '/bdp/yjgl/emergency-drill/page',
      method: 'post',
      data
    })
  }
}