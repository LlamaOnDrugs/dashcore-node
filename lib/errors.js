'use strict';

var createError = require('errno').create;

var QuantisnetcoreNodeError = createError('QuantisnetcoreNodeError');

var RPCError = createError('RPCError', QuantisnetcoreNodeError);

module.exports = {
  Error: QuantisnetcoreNodeError,
  RPCError: RPCError
};
