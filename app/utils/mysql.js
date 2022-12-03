const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mock-service',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const connection = function (sql, options, callback) {
  // 从连接池中获取一个连接
  pool.getConnection((err, connection) => {
    if (err) {
      callback && callback(err, null, null)
    } else {
      // 数据库查询
      connection.query(sql, options, (err, results, fields) => {
        callback && callback(err, results, fields)
      })
      // 释放连接
      connection.release()
    }
  })
}

module.exports = connection;
