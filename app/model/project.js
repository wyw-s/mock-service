'use strict'

const connection = require('../utils/mysql');
const { errorFn } = require('../utils/util');

const createProjectTable = `
CREATE TABLE IF NOT EXISTS project_list(
  Id INT auto_increment PRIMARY KEY,
  project_name VARCHAR(128),
  create_time VARCHAR(32),
  remark VARCHAR(255)
)`

// 创建项目表
connection(createProjectTable).catch(errorFn)

module.exports = connection;
