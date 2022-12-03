const connection = require('../utils/mysql')
const router = require('./index');

const createInterfaceTable = `
CREATE TABLE IF NOT EXISTS Interface(
  Id INT auto_increment PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  methods VARCHAR(255) 
)`

// 创建表
connection(createInterfaceTable)

router.get('/interface', (request, response, next) => {
  const { url } = request.body
  connection('SELECT * FROM Interface WHERE url = ?', url, (error, results) => {
    if (!error) {
      if (!results.length) {
        connection('INSERT INTO Interface SET ?', request.body, (error) => {
          if (!error) {
            response.send({
              code: 200,
              success: true,
              message: '注册成功'
            })
          } else {
            response.send({
              code: 500,
              success: false,
              message: '注册失败'
            })
            next(error)
          }
        })
      } else {
        response.send({
          code: 401,
          success: true,
          message: '已注册！'
        })
      }
    } else {
      response.send({
        code: 500,
        success: false,
        message: '内部错误'
      })
      next(error)
    }
  })
})

module.exports = router
