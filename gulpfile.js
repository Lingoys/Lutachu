var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    clean  = require('gulp-clean'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    minifycss    = require('gulp-minify-css'),
    livereload   = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('stylus', function() {
  return gulp.src('src/lutachu.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'))
    .pipe(autoprefixer(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('scss', function() {
  return gulp.src('sass/lutachu.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(autoprefixer(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
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
