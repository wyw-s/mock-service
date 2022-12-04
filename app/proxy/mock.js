'use strict'

const { Mock } = require('../model')

module.exports = class MockProxy {
  static newAndSave (docs) {
    return Mock(docs)
  }

  static getById (mockId) {
    return Mock(mockId);
  }

  static find (query, opt) {
    return Mock(query, {}, opt);
  }

  static findOne (query, opt) {
    return Mock(query, {}, opt);
  }

  static updateById (mock) {
    return Mock()
  }

  static delByIds (mockIds) {
    return Mock()
  }

  static del (query) {
    return Mock(query)
  }
}
