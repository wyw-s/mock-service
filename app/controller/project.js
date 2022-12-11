'use strict'

const moment = require('moment');
const { ProjectProxy } = require('../proxy')

module.exports = class ProjectController {
  /**
   * 创建项目
   * @param Object ctx
   */
  static async create (ctx) {
    const remark = ctx.request.body.remark
    const projectName = ctx.request.body.projectName
    const saveQuery = {
      project_name: projectName,
      create_time: moment().format('YYYY-MM-DD HH:ss:mm'),
      remark: remark || projectName
    }

    const { success, message, results } = await ProjectProxy.findOne(projectName);

    if (!success) {
      ctx.body = ctx.util.refail(message);
      return;
    }

    if (results.length) {
      ctx.body = ctx.util.refail(`项目 ${name} 已存在`);
      return
    }

    const { success: suc } = await ProjectProxy.newAndSave(saveQuery)

    if (suc) {
      ctx.body = ctx.util.resuccess('创建成功');
      return;
    }

    ctx.body = ctx.util.refail(`项目 ${name} 创建失败`);
  }

  /**
   * 获取项目列表
   * @param Object ctx
   */
  static async list (ctx) {
    const { success, message, results } = await ProjectProxy.find();

    if (success) {
      ctx.body = ctx.util.resuccess(results);
      return;
    }

    ctx.body = ctx.util.refail(message);
  }

  /**
   * 根据项目Id获取项目详情
   * @param Object ctx
   */
  static async detail (ctx) {
    const projectId = ctx.params.projectId;
    const { success, message, results } = await ProjectProxy.findOne('', projectId);

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
   * 更新项目
   * @param Object ctx
   */
  static async update (ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 删除项目
   * @param Object ctx
   */
  static async delete (ctx) {
    ctx.body = ctx.util.resuccess()
  }
}
