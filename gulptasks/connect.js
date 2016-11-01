connect = require('gulp-connect');

module.exports = function (gulp, config) {
    gulp.task('connect', function () {
        connect.server({
            port: config.server.port || 8080,
            root: config.dist.dir,
            livereload: true
        });
    });
};