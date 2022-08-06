// {app_root}/app/io/middleware/packet.js
module.exports = () => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet received!');
    console.log('packet:', ctx.packet);
    await next();
  };
};
