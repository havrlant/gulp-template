module.exports = function (gulp, config) {
    const gulpsync = require('gulp-sync')(gulp);
    
    return gulp.task('devel', gulpsync.sync(['clean', ['javascript', 'html', 'less', 'assets'], ['watch', 'connect']]), function() {

    });
};