/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var app = new EmberApp();

var mergeTrees  = require('broccoli-merge-trees');
var pickFiles   = require('broccoli-static-compiler');
var extraAssets = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  files: ['**/*'],
  destDir: '/fonts/bootstrap'
});

app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');


module.exports = mergeTrees([app.toTree(), extraAssets]);
