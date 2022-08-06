'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await app.mysql.get('user', { id: 2 }); // 单实例可以直接通过 app.mysql 访问
    ctx.body = result;
  }
}

module.exports = HomeController;
