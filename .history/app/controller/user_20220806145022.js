'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, app } = this;
    const result = await app.mysql.get('user', { id: 2 }); // 单实例可以直接通过 app.mysql 访问
    console.log('result', result);
    ctx.body = result;
  }

  async register() {
    const { ctx } = this;
    console.log('________ctx', ctx.request.body);
    const result = ctx.request.body;
    ctx.body = result;
  }
}

module.exports = UserController;
