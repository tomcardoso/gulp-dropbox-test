var gulp = require('gulp');
var gulpDropbox = require('gulp-dropbox');

gulp.task('default', function() {
  return gulp.src('./file/*.txt')
    .pipe(gulpDropbox({
      token: process.env.DROPBOX_TOKEN,
      path: '/Public',
      folder: 'gulp-dropbox-test'
    }));
  });
