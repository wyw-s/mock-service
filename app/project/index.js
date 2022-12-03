/**
 * @Author: wangyw26123
 * @Description: 整合所有的路由，添加post和get方法
 * @Date: Created in 2022-02-15 23:50:17
 * @Modifed By:
 */

const http = require('../utils/http')
const kylinAfterLoan = require('./kylin-after-loan');
const kylinGuarantee = require('./kylin-guarantee');
const common = require('./common');

const allRouter = [
  ...kylinAfterLoan,
  ...kylinGuarantee,
  ...common
];

const methods = ['post', 'get'];

methods.forEach((method) => {
    for(const { path, context } of allRouter) {
        http[method](path, context);
    }
})

module.exports = http;
