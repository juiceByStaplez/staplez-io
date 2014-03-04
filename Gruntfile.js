module.exports = function (grunt) {
	'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            ctrl: {
                src: 'public/js/controllers/*.js',
                dest: 'public/js/controllers.js'
            },
            srv: {
                src: 'public/js/services/*.js',
                dest: 'public/js/services.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: false
                }
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            },
            styles: {
                files: 'public/scss/*.scss',
                tasks: ['sass:dev']
            },
            scripts: {
                files: ['<%= concat.ctrl.src %>', '<%= concat.srv.src %>'],
                tasks: ['concat:ctrl', 'concat:srv']
            }
        },
        shell: {
            pullRepo: {
                options: {
                    stdout: true
                },
                command: 'git pull'
            }
        },
        sass: {
            dev: {
                files: {
                    'public/css/app.css':'public/scss/app.scss'
                },
                options: {
                    style: 'expanded',
                    sourcemap: true,
                    compass: true
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'public/js/app.js':'public/coffee/app.coffee'
                },
                options: {
                    bare: true
                }
            }
        }
    });
    // Default task
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};