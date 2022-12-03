import http from './http';

// 获取接口列表
export function getInterface (data) {
  return http({
    url: '/interface',
    method: 'get',
    data
  })
}
