'use strict'

// const Mock = require('mockjs')
// const pathToRegexp = require('path-to-regexp')

const moment = require('moment');
const { MockProxy } = require('../proxy')

module.exports = class MockController {
  /**
   * 创建接口
   * @param Object ctx
   */
  static async create (ctx) {
    const { name, url, method, body, response, projectId, remark } = ctx.request.body;
    const saveQuery = {
      name,
      url,
      method,
      body,
      response,
      project_id: projectId,
      create_time: moment().format('YYYY-MM-DD HH:ss:mm'),
      remark
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

    const { success: suc } = await MockProxy.newAndSave(saveQuery)

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
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 获取 Mock 接口
   * @param {*} ctx
   */
  static async getMockAPI (ctx) {
  }

  /**
   * 获取接口数据
   * @param Object ctx
   */
  static async getAPIByProjectIds (ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 删除接口
   * @param Object ctx
   */

  static async delete (ctx) {
    ctx.body = ctx.util.resuccess()
  }
}
