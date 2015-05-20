var fs = require('fs');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/bab.min.js": "dist/bab.js"
                }
            }
        },
        concat: {
            main: {
                src: [
                    'src/**/*.js',
                    '!src/**/*-spec.js'
                ],
                dest: 'dist/bab.js'
            }
        },
        watch: {
            concat: {
                files: [
                    'src/**/*.js'
                ],
                tasks: ['concat', 'babel']
            }
        }
    });

    grunt.registerTask("default", ["dev"]);
    grunt.registerTask('dev', [
        'concat',
        'babel',
        'watch'
    ]);
};