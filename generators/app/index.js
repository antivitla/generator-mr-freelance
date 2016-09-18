'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var Chance = require('chance');

var parsePropsToFolderName = require('./parse-props-to-folder-name.js');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s pajamas ' + chalk.yellow('mr-freelance') + ' project generator!'
    ));

    var today = new Date();
    var random = new Chance();
    var prompts = [{
      type: 'input',
      name: 'year',
      message: 'Year of start?',
      default: today.getFullYear()
    }, {
      type: 'input',
      name: 'month',
      message: '... and month (1 - january, etc.)?',
      default: today.getMonth() + 1
    }, {
      type: 'input',
      name: 'clientName',
      message: 'Who\'s the client?',
      default: random.name({nationality: 'it'})
    }, {
      type: 'input',
      name: 'projectName',
      message: 'What\'s the title?',
      default: random.street({country: 'it'})
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.delimiterOfType = '--';
      this.props.delimiterOfSpace = '-';
    }.bind(this));
  },

  writing: function () {
    var projectFolder = parsePropsToFolderName(this.props);
    var projectTitle = this.props.projectName;

    // Main 'incoming' and 'www'
    mkdirp(this.destinationPath(projectFolder + '/incoming/'));

    // Main working folder 'frontend' with 'readme.md'
    this.fs.copy(
      this.templatePath('frontend-readme.md'),
      this.destinationPath(projectFolder + '/www/frontend/readme.md')
    );

    // Git init
    this.spawnCommand('git', ['init', projectFolder + '/www']);

    // 'Dist' and 'Src' folders
    mkdirp(this.destinationPath(projectFolder + '/www/frontend/src'));
    mkdirp(this.destinationPath(projectFolder + '/www/frontend/dist'));

    // Sublime Text project file
    this.fs.copy(
      this.templatePath('.sublime-project'),
      this.destinationPath(
        projectFolder + '/.sublime/' +
        projectTitle + '.sublime-project'
      )
    );
  }
  // install: function () {
  //   this.installDependencies();
  // }
});
