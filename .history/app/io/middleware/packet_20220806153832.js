/**
 * 对消息进行预处理
 * @param app
 * @returns {(function(*, *): Promise<void>)|*}
 */
module.exports = app => {
  console.log('app', app);
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet received!');
    console.log('packet:', ctx.packet);
    await next();
  };
};
