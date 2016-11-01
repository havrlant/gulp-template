module.exports = function (gulp, config) {
    const gulpsync = require('gulp-sync')(gulp);

    return gulp.task('devel', gulpsync.sync(['clean', config.coreGulpTasks, ['watch', 'connect']]), function() {

    });
};