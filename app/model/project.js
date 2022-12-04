'use strict'

const connection = require('../utils/mysql');

const createProjectTable = `
CREATE TABLE IF NOT EXISTS project_list(
  Id INT auto_increment PRIMARY KEY,
  project_name VARCHAR(255),
  created_date VARCHAR(255),
  remark VARCHAR(255)
)`

// 创建项目表
connection(createProjectTable)

module.exports = connection;
