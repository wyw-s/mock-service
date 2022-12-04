const Koa = require('koa');
const { koaBody } = require('koa-body');
const logger = require('koa-logger');
const chalk = require('chalk');
const moment = require('moment');
const Mock = require('mockjs');
const middleware = require('./middlewares')
const routers = require('./router');
const app = new Koa();
global.$Mock = Mock.mock;

app.use(koaBody());
app.use(middleware.util)
app.use(logger((str) => {
    console.log(`[${ chalk.gray(moment().format('YYYY-MM-DD HH:mm:ss')) }]`, str);
}));

// Object.keys(routers).forEach(key => {
//     app.use(routers[key].routes()).use(routers[key].allowedMethods());
// });
app.use(routers.api.routes())
app.use(routers.api.allowedMethods())
// app.use(routers.routes()).use(routers.allowedMethods());

module.exports = app;
