module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true
                },
                src: ['views/index.html']
            }
        },

        uglify: {
            files: {
                'public/js/script.min.js': ['assets/js/lib/bootstrap3.1.1.js', 'assets/js/index.js']
            }
        },

        cssmin: {
          combine: {
            files: {
              'public/css/style.min.css': ['assets/css/lib/bootstrap3.1.1.css', 'assets/css/style.css']
            }
          }
        },

        watch: {
            html: {
                files: ['views/index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['assets/js/lib/bootstrap.min.js', 'assets/js/index.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/css/lib/bootstrap.css', 'assets/css/style.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.registerTask('default', ['htmlhint', 'uglify', 'cssmin']);

};