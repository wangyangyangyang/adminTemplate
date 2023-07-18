import request from '@/utils/request'

export default class  informationFillingApi{
  static getPage(data) {
    return request({
      url: '/bdp/yjgl/company-risk-info/page',
      method: 'post',
      data: data
    })
  }
}
 