const Router = require('@koa/router');
const { mock, project } = require('../controller')
const middleware = require('../middlewares');
const apiRouter = new Router({ prefix: '/api' });
const mockRouter = new Router({ prefix: '/8mock' });

exports.mock = mockRouter
  .all('/(.*)', middleware.mockFilter, mock.getMockAPI)

exports.api = apiRouter
  .get('/project', project.list)
  .post('/project/create', project.create)
  .get('/project/detail/:projectId', project.detail)
  // .post('/project/update/:projectId', project.update)
  // .post('/project/delete', project.delete)

  .get('/mock', mock.list)
  .post('/mock/create', mock.create)
  .get('/mock/detail/:mockId', mock.detail)
  .post('/mock/update/:mockId', mock.update)
  .post('/mock/delete', mock.delete)
// module.exports = {
//   mockRouter,
//   apiRouter
// };
