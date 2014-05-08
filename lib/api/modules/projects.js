/*
 * robin-js-sdk
 * http://getrobin.com/
 *
 * Copyright (c) 2014 Robin Powered Inc.
 * Licensed under the Apache v2 license.
 * https://github.com/robinpowered/robin-js-sdk/blob/master/LICENSE
 *
 */

var Projects, q, util;
util = require('../../util');
q = require('q');

Projects = (function () {

  function Projects (robin) {
    util.__copyProperties(this, robin);
  }

  return Projects;

}).apply(this, arguments);

module.exports = Projects;