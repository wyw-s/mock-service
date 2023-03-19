const mysql = require('mysql2');

const { MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const pool = mysql.createPool({
  host: 'localhost',
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
});

const connection = function(sql, options) {
  // 从连接池中获取一个连接
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        reject({
          success: false,
          message: 'database error',
          error: err
        });
        return;
      }

      // 数据库查询
      connection.query(sql, options, (_err, results, fields) => {
        if(_err) {
          reject({ success: false, message: 'query error', error: _err });
        } else {
          resolve({
            success: true,
            message: 'query success',
            error: null,
            results,
            fields
          });
        }
      });

      // 释放连接
      connection.release();
    });
  });
};

module.exports = connection;
