const Koa = require('koa');
const logger = require('koa-logger');
const chalk = require('chalk');
const moment = require('moment');
const routers = require('./project');
const Mock = require('mockjs');
const app = new Koa();
global.$Mock = Mock.mock;

app.use(logger((str) => {
    console.log(`[${ chalk.gray(moment().format('YYYY-MM-DD HH:mm:ss')) }]`, str);
}));

// Object.keys(routers).forEach(key => {
//     app.use(routers[key].routes()).use(routers[key].allowedMethods());
// });

app.use(routers.routes()).use(routers.allowedMethods());

module.exports = app;
