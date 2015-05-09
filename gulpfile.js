var gulp = require('gulp'),
  clean  = require('gulp-clean'),
  stylus = require('gulp-stylus');

gulp.task('clean', function() { 
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('styles', function() {
  return gulp.src('src/lutachu.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['clean'], function() { 
  gulp.start('styles', 'fonts');
});