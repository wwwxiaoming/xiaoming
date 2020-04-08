/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
// 定制404
'use strict';

module.exports = (option, app) => {
  return async function notFoundHandler(ctx, next) {
    await next();
    // 如果没有发现对应的页面，就自动返回我们设置的页面或者数据
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: '您访问的页面已丢失' };
      } else {
        ctx.body = '<h1>您访问的页面已丢失</h1>';
      }
    }
  }
}