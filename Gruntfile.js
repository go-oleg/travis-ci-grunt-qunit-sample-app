module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['tests/index.html']
        }
    });

		grunt.loadNpmTasks("grunt-contrib-qunit");
    // Task to run tests
    grunt.registerTask('test', 'qunit');
};
