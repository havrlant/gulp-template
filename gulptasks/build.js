module.exports = function (gulp, config) {
    const gulpsync = require('gulp-sync')(gulp);

    gulp.task('build', gulpsync.sync(['clean', ['javascript', 'html', 'less', 'assets']]), function () {
        
    });
};