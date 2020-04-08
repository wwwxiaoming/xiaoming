/* eslint-disable eol-last */
/* eslint-disable semi */
'use strict';

/** @type Egg.EggPlugin */
/* Template rendering plugin */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-ejs',
};

/* Cross domain request plugin */
exports.cors = {
  enable: true,
  package: 'egg-cors',
};