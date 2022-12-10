'use strict'

const connection = require('../utils/mysql');
const { errorFn } = require('../utils/util');

const createMockTable = `
CREATE TABLE IF NOT EXISTS mock_list(
  Id INT auto_increment PRIMARY KEY,
  name VARCHAR(64),
  url VARCHAR(255),
  method VARCHAR(255),
  body VARCHAR(255),
  response VARCHAR(255),
  project_id VARCHAR(64),
  create_time VARCHAR(32),
  remark VARCHAR(255)
)`

// 创建mock表
connection(createMockTable).catch(errorFn);

module.exports = connection;
