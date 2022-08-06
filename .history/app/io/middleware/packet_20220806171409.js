// {app_root}/app/io/middleware/packet.js
module.exports = app => {
  console.log('packet_app', app);
  return async (ctx, next) => {
    // const event = ctx.packet[0];
    const oClientMessage = ctx.packet[1];

    const { userType } = oClientMessage;

    console.log('userType', userType);

    switch (userType) {
      // 管理端
      case 'manager':
        console.log('管理端发来消息', oClientMessage[1]);
        break;
      // 查看端
      case 'viewer':
        break;
      // 采集端
      case 'collecter':
        break;
      default:
    }

    await next();
  };
};
