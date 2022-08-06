/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = exports = {
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'fengkong',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    io: {
      init: {},
      namespace: { // 命名空间
        '/': { // 可通过 app.io.of('/') 获取到这个命名空间，下面代码中有用到
          // 对应下面的 app/io/middleware/connection.js
          connectionMiddleware: [ 'connection', 'auth' ],
          // 对应下面的 app/io/middleware/packet.js
          packetMiddleware: [ 'packet' ],
        },
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659766761319_6840';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
