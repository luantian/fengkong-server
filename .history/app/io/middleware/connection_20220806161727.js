// 在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理
module.exports = (app) => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};

// 同时，针对当前的连接也可以简单处理：
// module.exports = (app) => {
//   return async (ctx, next) => {
//     if (true) {
//       ctx.socket.disconnect();
//       return;
//     }
//     await next();
//     console.log('disconnection!');
//   };
// };
