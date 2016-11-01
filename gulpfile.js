const gulp = require('gulp');
const config = require('./config');
const gulpsync = require('gulp-sync')(gulp);

require("./gulptasks")(gulp, config);

gulp.task('default', gulpsync.sync(['clean', ['javascript', 'html', 'less', 'assets'], ['watch', 'connect']]), function() {
    console.log("Calling default");
});