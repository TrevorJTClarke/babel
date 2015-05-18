var fs = require('fs');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

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
                    'src/**/*.js'
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
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'landing',
                    require: 'coverage/blanket'
                },
                src: ['dist/bab.min.js']
            }
        }
    });

    grunt.registerTask("default", ["babel"]);

    // test the codes
    grunt.registerTask('test', [
        // 'jasmine'
    ]);

    grunt.registerTask('dev', [
        'concat',
        'babel',
        'watch'
    ]);
};