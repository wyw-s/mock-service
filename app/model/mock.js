'use strict'

const connection = require('../utils/mysql');
const { errorFn } = require('../utils/util');

const createMockTable = `
CREATE TABLE IF NOT EXISTS mock_list(
  Id INT auto_increment PRIMARY KEY,
  name VARCHAR(128),
  url VARCHAR(128),
  response VARCHAR(2000),
  project_id INT(11),
  create_time VARCHAR(32),
  remark VARCHAR(255)
)`

// 创建mock表
connection(createMockTable).catch(errorFn);

module.exports = connection;
