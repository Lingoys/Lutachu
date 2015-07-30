var gulp     = require('gulp'),
  clean      = require('gulp-clean'),
  stylus     = require('gulp-stylus'),
  sass       = require('gulp-sass'),
  minifycss  = require('gulp-minify-css'),
  rename     = require('gulp-rename')
  livereload = require('gulp-livereload');

gulp.task('clean', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('scss', function() {
  return gulp.src('sass/lutachu.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('stylus', function() {
  return gulp.src('src/lutachu.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('stylus', 'fonts');
});

gulp.task('sass', ['clean'], function() {
  gulp.start('scss', 'fonts');
});

gulp.task('watch', function() {
  gulp.watch('src/', ['stylus']);
  livereload.listen();
});

gulp.task('watch-sass', function() {
  gulp.watch('sass/', ['scss']);
  livereload.listen();
});
