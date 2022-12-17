import http from './http';

// 获取项目列表
export function getProjectList (data) {
  return http({
    url: '/api/project',
    method: 'get',
    data
  })
}

// 创建项目
export function createProject (data) {
  return http({
    url: '/api/project/create',
    method: 'post',
    data
  })
}

// 获取项目详情
export function getProjectDetail (projectId) {
  return http({
    url: `/api/project/detail/${projectId}`,
    method: 'post',
  })
}

// 获取接口列表
export function getInterface (data) {
  return http({
    url: '/api/mock',
    method: 'post',
    data
  })
}

// 创建接口
export function createInterface (data) {
  return http({
    url: '/api/mock/create',
    method: 'post',
    data
  })
}

// 获取接口详情
export function getMockDetail (mockId) {
  return http({
    url: `/api/mock/detail/${mockId}`,
    method: 'get',
  })
}

// 更新接口
export function updateMock (mockId, data) {
  return http({
    url: `/api/mock/update/${mockId}`,
    method: 'post',
    data
  })
}

// 删除接口
export function delMockInterface (data) {
  return http({
    url: `/api/mock/delete`,
    method: 'post',
    data
  })
}
