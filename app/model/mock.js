'use strict'

const connection = require('../utils/mysql');

const createMockTable = `
CREATE TABLE IF NOT EXISTS mock_list(
  Id INT auto_increment PRIMARY KEY,
  name VARCHAR(255),
  url VARCHAR(255),
  projectId VARCHAR(255),
  date VARCHAR(255),
  remark VARCHAR(255)
)`

// 创建mock表
connection(createMockTable)

module.exports = connection;
