'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var randomProps = require('../generators/app/random-props.js');
var parsePropsToFolderName = require('../generators/app/parse-props-to-folder-name.js');

describe('generator-mr-freelance:app', function () {
  var props = randomProps();
  var rootPath = parsePropsToFolderName(props);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(props)
      .toPromise();
  });

  it('Creates main structure', function (done) {
    setTimeout(function () {
      assert.file([
        rootPath + '/.sublime-text/' + props.projectName + '.sublime-project',
        rootPath + '/incoming',
        rootPath + '/www/.git',
        rootPath + '/www/frontend/dist',
        rootPath + '/www/frontend/src',
        rootPath + '/www/frontend/readme.md',
        rootPath + '/journal.md',
      ]);
      done();
    }, 1000);
  });
});
