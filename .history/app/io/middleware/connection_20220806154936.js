module.exports = app => {
  console.log('app', app);
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    console.log('server socket connected');
    await next();
    console.log('server socket disconnected');
  };
};
