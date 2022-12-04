import http from './http';

// 获取项目列表
export function getProjectList (data) {
  return http({
    url: '/project',
    method: 'get',
    data
  })
}

// 创建项目
export function createProject (data) {
  return http({
    url: '/project/create',
    method: 'post',
    data
  })
}

// 获取接口列表
export function getInterface (data) {
  return http({
    url: '/interface',
    method: 'get',
    data
  })
}
