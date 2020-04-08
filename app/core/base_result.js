'use strict';
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      Status: true,
      Message: '',
      Result: data,
    };
  }

  fail(message) {
    this.ctx.body = {
      Status: false,
      Message: message,
      Result: null,
    };
  }
}

module.exports = BaseController;