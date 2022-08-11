module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        uglify: {
            options: {
                mangle: false,
            },
            dist: {
                files: {
                    'public/output.min.js': ['js/jquery.min.js', 'js/bootstrap.min.js', 'js/bootstrap-bundle.min.js', 'js/fullpage.js', 'js/owl.carousel.min.js', 'js/swiper.js', 'js/main.js']
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'public/output.min.css': ['css/*.css']
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif,svg}'],
                    dest: 'public/img/icon'
                }]
            },
            src: {
                files: [{
                    expand: true,
                    cwd: 'img/src',
                    src: ['*.{png,jpg,gif,svg}'],
                    dest: 'public/img'
                }]
            }
        },

        /*replace: {
            dist: {
                src: ['css/min.css'],
                overwrite: true,
                replacements: [{
                    from: "css/",
                    to: "public/css/"
                }]
            }
        },*/

        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/sass/style.scss'
                }
            }
        },

        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['css/sass/style.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/style.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false
                }
            },
            img: {
                files: ['*.{png,jpg,gif}', '!src/dist/*'],
                tasks: ['imagemin'],
                options: {
                    spawn: false
                }
            },
        }

    });

    // grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin']);
    grunt.registerTask('default', ['cssmin', 'uglify']);
};