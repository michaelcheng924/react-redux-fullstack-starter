var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    method1: function() {
        console.log('method 1 just ran');
    },
    method2: function() {
        console.log('method 2 just ran');
    }
});
