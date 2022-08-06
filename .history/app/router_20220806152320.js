'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.user.login);
  router.post('/register', controller.user.register);
  router.get('/socket', controller.websocket.socket);

  // get 获取参数 ctx.query
  // post 获取参数 ctx.request.body

};
