var path = require('path');
var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var glob = require('glob');

module.exports = generators.Base.extend({
    initializing: function () {
        this.sourceRoot(path.join(this.sourceRoot(), '../../react-redux-fullstack-starter'));
    },

    prompting: function() {
        this.log(yosay(
            'Welcome to the ' + chalk.green('React Redux Fullstack Starter') + ' generator!'
        ));
    },

    writing: function() {
        var done = this.async();
        glob('**/*', { cwd: this.sourceRoot(), dot: true }, function (err, files) {
            if (err) {
                this.log('Error:', err.message);
                return done();
            }
            files.forEach(function (file) {
                var dest = file;
                if (file === 'npmignore') {
                    dest = '.' + file;
                }
                this.fs.copy(
                    this.templatePath(file),
                    this.destinationPath(dest)
                );
            }, this);
            done();
        }.bind(this));
    }
});
