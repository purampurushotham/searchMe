// Karma configuration
// Generated on Fri Mar 31 2017 16:17:30 GMT+0530 (IST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
            "bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "bower_components/jQuery/dist/jquery.js",
            "bower_components/angular-bootstrap/ui-bootstrap.min.js",
            "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "bower_components/angular-resource/angular-resource.min.js",
            "bower_components/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/ng-table/bundles/ng-table.min.js",
            "app/modules/searchMe/app.module.js",
            "app/modules/searchMe/app.config.js",
            "app/modules/searchMe/app.run.js",
            "app/modules/searchMe/app.resource.js",
            "app/modules/searchMe/search.service.js",
            "app/modules/searchMe/header/header.module.js",
            "app/modules/searchMe/header/header.component.js",
            "app/modules/searchMe/home/home.module.js",
            "app/modules/searchMe/home/home.component.js",
        "app/modules/searchMe/Userform/userForm.module.js",
        "app/modules/searchMe/Userform/userForm.component.js",
        "app/modules/searchMe/userTable/userTable.module.js",
        "app/modules/searchMe/userTable/userTable.component.js",
        'app/partials/**/*.html',
            'test/unit-tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        browserNoActivityTimeout: 1000000
    })
}
