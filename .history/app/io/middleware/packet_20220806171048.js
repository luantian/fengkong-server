// {app_root}/app/io/middleware/packet.js
module.exports = app => {
  console.log('packet_app', app);
  return async (ctx, next) => {
    const event = ctx.packet[0];
    const oClientMessage = ctx.packet[1];

    const { userType } = oClientMessage;

    console.log('userType', userType);

    if (userType === 'manage') {
      console.log('管理端发来消息', oClientMessage[1]);
    }

    await next();
  };
};
