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
    url: '/mock',
    method: 'get',
    data
  })
}

// 创建接口
export function createInterface (data) {
  return http({
    url: '/mock/create',
    method: 'post',
    data
  })
}
