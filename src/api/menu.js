import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: 'http://106.225.177.204:8082/third/getMenuRouterDataBySystemId?systemId=fxyj',
    method: 'get'
  })
}