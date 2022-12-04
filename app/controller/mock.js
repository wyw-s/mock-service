'use strict'

const Mock = require('mockjs')
// const pathToRegexp = require('path-to-regexp')

const { MockProxy, ProjectProxy } = require('../proxy')

module.exports = class MockController {
  /**
   * 创建接口
   * @param Object ctx
   */

  static async create (ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 获取接口列表
   * @param Object ctx
   */
  static async list (ctx) {
    ctx.body = ctx.util.resuccess()
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
