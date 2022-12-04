const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'mock_service',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
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
