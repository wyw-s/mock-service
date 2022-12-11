const Koa = require('koa');
const { koaBody } = require('koa-body');
const logger = require('koa-logger');
const chalk = require('chalk');
const moment = require('moment');
const Mock = require('mockjs');
const serve = require('koa-static');
const path = require('path');
const middleware = require('./middlewares');
const routers = require('./router');
const app = new Koa();
global.$Mock = Mock.mock;

app.use(serve(path.join(__dirname, '../client/dist')));
app.use(koaBody());
app.use(middleware.util);
app.use(logger((str) => {
  console.log(`[${ chalk.gray(moment().format('YYYY-MM-DD HH:mm:ss')) }]`, str);
}));
app.use(routers.mock.routes()).use(routers.mock.allowedMethods());
app.use(routers.api.routes()).use(routers.api.allowedMethods());

module.exports = app;
