var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    prompting: function() {
        this.log(yosay(
            'Welcome to the ' + chalk.green('React Redux Fullstack Starter Kit') + 'generator!'
        ));
    }
});
