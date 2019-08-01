// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');
const karmaJasmine = require('karma-jasmine');
const KarmaChromeLauncher = require('karma-chrome-launcher');
const KarmaJasmineHtmlReporter = require('karma-jasmine-html-reporter');
const KarmaCoverageIstanbulReporter = require('karma-coverage-istanbul-reporter');
const AngularDevkitBuildAngularPluginsKarma = require('@angular-devkit/build-angular/plugins/karma');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            karmaJasmine,
            KarmaChromeLauncher,
            KarmaJasmineHtmlReporter,
            KarmaCoverageIstanbulReporter,
            AngularDevkitBuildAngularPluginsKarma,
        ],
        client: {
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: path.join(__dirname, './coverage/angular-test-app'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true,
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true,
    });
};
