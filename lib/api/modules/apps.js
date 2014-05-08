/*
 * robin-js-sdk
 * http://getrobin.com/
 *
 * Copyright (c) 2014 Robin Powered Inc.
 * Licensed under the Apache v2 license.
 * https://github.com/robinpowered/robin-js-sdk/blob/master/LICENSE
 *
 */

var Apps, q, util;
util = require('../../util');
q = require('q');

Apps = (function () {

  function Apps (robin) {
    util.__copyProperties(this, robin);
  }

  Apps.prototype.getAll = function() {
    return this.sendRequest('/apps/', 'GET');
  };

  Apps.prototype.get = function (id_or_slug) {
    if (id_or_slug) {
      return this.sendRequest('/apps/' + id_or_slug, 'GET');
    } else {
      return this.rejectRequest('Bad Request. An id or slug must be supplied for this operation.');
    }
  };

  Apps.prototype.update = function (id_or_slug, data) {
    if (id_or_slug && data) {
      return this.sendRequest('/apps/' + id_or_slug, 'POST', data);
    } else {
      return this.rejectRequest('Bad Request. An id or slug along with a data object must be supplied for this operation.');
    }
  };

  Apps.prototype.remove = function (id_or_slug) {
    if (id_or_slug) {
      return this.sendRequest('/apps/' + id_or_slug, 'DELETE');
    } else {
      return this.rejectRequest('Bad Request. An id or slug must be supplied for this operation.');
    }
  };

  return Apps;

}).apply(this, arguments);

module.exports = Apps;