'use strict'

const { Project } = require('../model')

module.exports = class ProjectProxy {
  static findByIds (ids) {
    return Project()
  }

  static getById (projectId) {
    return Project('SELECT * FROM project_list WHERE Id = ?', projectId)
  }

  static newAndSave (params) {
    return Project("INSERT INTO project_list set ?", params)
  }

  static findOne (name, id) {
    return Project('SELECT * FROM project_list WHERE project_name = ? OR Id = ?', [name, id]);
  }

  static find () {
    const sql = `
      SELECT
        Id AS id,
        project_name AS projectName,
        create_time AS createTime,
        remark
      FROM project_list
      ORDER BY Id desc;
      `;

    return Project(sql);
  }

  static updateById (project) {

  }

  static delById (projectId) {
    return Project()
  }
}
