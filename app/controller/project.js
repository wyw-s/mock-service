'use strict'

const { ProjectProxy } = require('../proxy')

module.exports = class ProjectController {
  /**
   * 创建项目
   * @param Object ctx
   */
  static async create (ctx) {
    const remark = ctx.request.body.remark
    const name = ctx.request.body.name
    const saveQuery = {
      project_name: name,
      remark: remark || name
    }

    const { success, message, results } = await ProjectProxy.findOne(name);

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
