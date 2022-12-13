'use strict'

const Mock = require('mockjs')

const moment = require('moment');
const { MockProxy, ProjectProxy } = require('../proxy')

module.exports = class MockController {
  /**
   * 创建接口
   * @param Object ctx
   */
  static async create (ctx) {
    const { name, url, response, projectId, remark } = ctx.request.body;
    const saveQuery = {
      name,
      url,
      response,
      project_id: projectId,
      create_time: moment().format('YYYY-MM-DD HH:ss:mm'),
      remark
    }

    const result = await ProjectProxy.getById(projectId);

    if (!result.success) {
      ctx.body = ctx.util.refail(result.message);
      return;
    }

    if (!result.results.length) {
      ctx.body = ctx.util.refail(`项目不存在`);
      return
    }

    const { success, message, results } = await MockProxy.findOne(url, projectId);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    if (results.length) {
      ctx.body = ctx.util.refail(`接口 ${url} 已存在`);
      return
    }

    const { success: suc } = await MockProxy.newAndSave({
      ...saveQuery,
      project_name: result.results[0].project_name
    })

    if (suc) {
      ctx.body = ctx.util.resuccess('创建成功');
      return;
    }

    ctx.body = ctx.util.refail(`接口 ${name} 创建失败`);
  }

  /**
   * 获取接口列表
   * @param Object ctx
   */
  static async list (ctx) {
    const { success, message, results } = await MockProxy.find();

    if (success) {
      ctx.body = ctx.util.resuccess(results);
      return;
    }

    ctx.body = ctx.util.refail(message);
  }

  /**
   * 更新接口
   * @param Object ctx
   */
  static async update (ctx) {
    const { mockId } = ctx.params;
    const { name, url, response, projectId, remark } = ctx.request.body;
    const saveQuery = {
      id: Number(mockId),
      name,
      url,
      response,
      projectId,
      remark
    }

    const result = await ProjectProxy.getById(projectId);

    if (!result.success) {
      ctx.body = ctx.util.refail(result.message);
      return;
    }

    if (!result.results.length) {
      ctx.body = ctx.util.refail(`项目不存在`);
      return
    }

    const { success, message } = await MockProxy.findOne(url, projectId);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    const { success: suc } = await MockProxy.updateById({
      ...saveQuery,
      projectName: result.results[0].project_name
    })

    if (suc) {
      ctx.body = ctx.util.resuccess('修改成功');
      return;
    }

    ctx.body = ctx.util.refail(`接口 ${name} 修改失败`);
  }

  /**
   * 获取 Mock 接口
   * @param {*} ctx
   */
  static async getMockAPI (ctx) {
    const { projectId, mockURL } = ctx.pathNode;
    const { success, message, results } = await MockProxy.findOne(mockURL, projectId);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    if (results[0]) {
      const response = JSON.parse(results[0].response);
      if (response instanceof Object) {
        const mockData = Mock.mock(response);
        ctx.body = mockData;
        return;
      }
      ctx.body = null;
      return;
    }

    ctx.body = ctx.util.refail(message)
  }

  /**
   * 获取接口数据
   * @param Object ctx
   */
  static async detail (ctx) {
    const mockId = ctx.params.mockId;
    const { success, message, results } = await MockProxy.getById(mockId);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    if (success && results[0]) {
      ctx.body = ctx.util.resuccess(results[0]);
      return;
    }

    ctx.body = ctx.util.resuccess();
  }

  /**
   * 删除接口
   * @param Object ctx
   */
  static async delete (ctx) {
    const { id } = ctx.request.body;
    const { success, message } = await MockProxy.del(id);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    ctx.body = ctx.util.resuccess('删除成功')
  }
}
