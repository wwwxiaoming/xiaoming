/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'xiaoming987654321';

  // add your middleware config here
  config.middleware = [ 'hinderspider', 'html404', 'errorHandler', 'printRouter' ];

  // 配置路由
  config.cluster = {
    listen: {
      path: '',
      port: 8000,
      hostname: '127.0.0.1',
    }
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true,
  };


  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: true,
    },
    domainWhiteList: [ '*' ],
  };

  exports.logger = {
    outputJSON: true,
  };

  // 配置模板渲染
  config.view = {
    cache: true, // 是否开启缓存，开启后，下次渲染同样路径的模板时不会重新查找
    mapping: {
      '.html': 'ejs', // 这个是配置渲染文件的后缀名，我一般都是喜欢html
    },
  };

  // 可以在这里统一修改session的设置,设置的内容跟cookie差不多
  config.session = {
    key: 'SESSION_ID',
    maxAge: 3600 * 1000 * 24 * 3,
    httpOnly: true, // 表示这个cookie只能被js代码访问
    encrypt: true,
    // renew:true   // 这个表示如果我们刷新设置页面你的话就会重新设置过期时间
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
