'use strict';

var program = require('commander');
var path = require('path');
var quantisnetcore = require('..');

function main(servicesPath, additionalServices) {
  /* jshint maxstatements: 100 */

  var version = quantisnetcore.version;
  var start = quantisnetcore.scaffold.start;
  var findConfig = quantisnetcore.scaffold.findConfig;
  var defaultConfig = quantisnetcore.scaffold.defaultConfig;

  program
    .version(version)
    .description('Start the current node')
    .option('-c, --config <dir>', 'Specify the directory with Quantisnetcore Node configuration')
    .option('-d, --daemon', 'Make quantisnetcore a daemon (running in the background)');

  program.parse(process.argv);

  if (program.config) {
    program.config = path.resolve(process.cwd(), program.config);
  }
  var configInfo = findConfig(program.config || process.cwd());
  if (!configInfo) {
    configInfo = defaultConfig({
      additionalServices: additionalServices
    });
  }
  if(program.daemon) {
    configInfo.config.daemon = true;
  }
  if (servicesPath) {
    configInfo.servicesPath = servicesPath;
  }
  start(configInfo);
}

module.exports = main;
