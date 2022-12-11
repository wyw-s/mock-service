'use strict'

const { Mock } = require('../model')

module.exports = class MockProxy {
  static newAndSave (params) {
    return Mock("INSERT INTO mock_list set ?", params)
  }

  static getById (mockId) {
    const sql = `
      SELECT
        Id AS id,
        name,
        url,
        method,
        body,
        response,
        project_id AS projectId,
        remark
      FROM mock_list where Id = ?
      `;
    return Mock(sql, mockId);
  }

  static find () {
    const sql = `
      SELECT
        Id AS id,
        name,
        url,
        response,
        project_id AS projectId,
        create_time AS createTime,
        remark
      FROM mock_list
      ORDER BY Id desc;
      `;

    return Mock(sql);
  }

  static findOne (url, projectId) {
    return Mock('select * from mock_list where url = ? AND project_id = ?', [url, projectId]);
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
