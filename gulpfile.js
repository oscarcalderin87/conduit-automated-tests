const gulp = require('gulp')
const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: './report/report.json',
    output: './report/report.html',
    reportSuiteAsScenarios: true,
    launchReport: true
}

gulp.task('generateReport', async function () {
    await reporter.generate(options);
})
