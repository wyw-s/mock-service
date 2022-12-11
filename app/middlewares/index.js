'use strict'

const { pathToRegexp } = require('path-to-regexp')

const codeMap = {
  '10000': 'fail',
  '200': 'success',
  '401': 'token expired',
  '500': 'server error',
}

const utilFn = {
  resuccess (data) {
    return {
      code: 200,
      success: true,
      message: codeMap['200'],
      data: data || null
    }
  },
  refail (message, code, data) {
    return {
      code: code || 10000,
      success: false,
      message: message || codeMap[code],
      data: data || null
    }
  }
}

module.exports = class Middleware {
  static util (ctx, next) {
    ctx.util = utilFn
    return next()
  }

  static mockFilter (ctx, next) {

    const pathNode = pathToRegexp('/8mock/:projectId/:mockURL*').exec(ctx.path)

    if (!pathNode) ctx.throw(404);

    ctx.pathNode = {
      projectId: pathNode[1],
      mockURL: '/' + (pathNode[2] || '')
    }

    return next()
  }
}
