// {app_root}/app/io/middleware/packet.js
module.exports = app => {
  console.log('packet_app', app);
  return async (ctx, next) => {
    console.log('packet:', ctx.packet);

    const oClientMessage = ctx.packet;

    const { userType } = oClientMessage;

    if (userType === 'manage') {
      console.log('管理端发来消息', oClientMessage[1]);
    }

    await next();
  };
};
