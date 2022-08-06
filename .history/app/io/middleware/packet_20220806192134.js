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
        oClientMessage.data.message = '经过服务器处理，数据库查询后，返回对应数据，目前为测试假数据';
        console.log('管理端: 使用onSendClientMessage事件', oClientMessage.data);
        ctx.socket.emit('onSendClientMessage', oClientMessage.data);
        break;
      // 查看端
      case 'viewer':
        break;
      // 采集端
      case 'collecter':
        oClientMessage.data.message = '经过服务器处理，数据库查询后，返回对应数据，目前为测试假数据';
        console.log('采集端: 使用onSendCollecterMessage事件', oClientMessage.data);
        ctx.socket.emit('onSendCollecterMessage', oClientMessage.data);
        break;
      default:
    }

    await next();
  };
};
