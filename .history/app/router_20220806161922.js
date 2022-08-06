'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.user.login);
  router.post('/register', controller.user.register);
  // io.get('/socket', controller.websocket.socket);
  // io.route('/socket', controller.websocket.socket);

  // socket.io
  io.of('/').route('server', io.controller.home.server);

  // get 获取参数 ctx.query
  // post 获取参数 ctx.request.body

};