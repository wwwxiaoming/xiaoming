/* eslint-disable no-unused-vars */
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
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.logger = {
    level: 'INFO',
    dir: path.join(__dirname, `../logs/prod/${new Date().toLocaleDateString()}`), // 保存路径为工程路径下`logs/prod/app`
  };

  return {
    ...config,
    ...userConfig,
  };
};
