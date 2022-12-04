const Router = require('@koa/router');
const { mock, project } = require('../controller')
// const mockRouter = new Router({ prefix: '/mock' });
const apiRouter = new Router({ prefix: '/api' });

// exports.mock = mockRouter
//   .all('*', middleware.mockFilter, rate, restc, mock.getMockAPI)

exports.api = apiRouter
  .get('/project', project.list)
  .post('/project/create', project.create)
  // .post('/project/update', project.update)
  // .post('/project/delete', project.delete)

  .get('/mock', mock.list)
  // .post('/mock/create', mock.create)
  // .post('/mock/update', mock.update)
  // .post('/mock/delete', mock.delete)
// module.exports = {
//   mockRouter,
//   apiRouter
// };
