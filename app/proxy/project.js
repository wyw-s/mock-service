'use strict'

const { Project } = require('../model')

module.exports = class ProjectProxy {
  static findByIds (ids) {
    return Project()
  }

  static getById (uid, projectId) {
    return Project()
  }

  static newAndSave (params) {
    return Project("INSERT INTO project_list set ?", params)
  }

  static findOne (name) {
    return Project('select * from project_list where project_name = ?', name);
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
