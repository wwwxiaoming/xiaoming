/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
// 打印路由和对方的ip地址
'use strict';

module.exports = (option, app) => {
  return async function printIp(ctx, next) {
    const date = new Date()
    app.logger.info('访问的时间: ' + date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    app.logger.info('客户端的ip为： ' + ctx.request.ip);
    app.logger.info('访问的路由为： ' + ctx.request.url);
    await next();
  }
};
