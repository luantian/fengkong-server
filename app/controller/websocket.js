'use strict';

const Controller = require('egg').Controller;

class WebSocketController extends Controller {

  async socket() {
    console.log('_________socket方法_________');
    const { ctx, app } = this;
    // =================== 引入 nsp，用于 websocket 相关操作 ===================
    const nsp = app.io.of('/'); // 获取到对应的命名空间的内容
    // =====================================================================

    let res;
    const reqBody = ctx.request.body;
    console.log('___________reqBody', reqBody);
    if (reqBody.type === 'rename') {
      // 重命名
      res = await ctx.service.admin.rename(ctx.params.id, reqBody);
    } else if (reqBody.type === 'editPassword') {
      // 重置密码
      res = await ctx.service.admin.editPassword(ctx.params.id, reqBody);
    } else if (reqBody.type === 'editStatus') {
      // 设置用户状态
      res = await ctx.service.admin.editStatus(ctx.params.id, reqBody);
      if (res) {
        if (reqBody.userStatus === 2 || reqBody.userStatus === 3) {
          // ====================== 发送消息 ======================
          nsp.emit('logout', { msg: 'logout', id: ctx.params.id });
          // ====================================================
        }
      }
    }

    if (res) {
      ctx.body = 'websocket成功';
    } else {
      ctx.body = 'websocket失败';
    }
  }
}
module.exports = WebSocketController;
