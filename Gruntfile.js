var fs = require('fs');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            main: {
                src: [
                    'config/start.js',
                    'public/js/**/*.js',
                    'config/end.js'
                ],
                dest: 'dist/js/bracket.js'
            }
        },
        watch: {
            concat: {
                files: [
                    'public/js/**/*.js'
                ],
                tasks: ['concat']
            }
        }
    });

    // test the codes
    grunt.registerTask('test', [
        // 'jasmine'
    ]);

    grunt.registerTask('dev', [
        'concat',
        'watch',
        // 'jasmine'
    ]);
};