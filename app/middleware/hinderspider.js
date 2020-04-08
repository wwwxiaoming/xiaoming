/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
// 定义一个中间件来处理爬虫
// 禁止爬去访问网站
'use strict';

module.exports = function(option, app) {
  return async function bidspider(ctx, next) {
    const strCode = ctx.get('user-agent').toString();
    const fdStart = strCode.indexOf('Mozilla');
    if (fdStart === 0) {
      await next();
    } else {
      ctx.status = 403;
      ctx.body = '您的程序已严重影响本网站的信息安全，请停下您的程序，否则我们将采取法律援助;';
    }
  };
}