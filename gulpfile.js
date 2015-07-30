var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    clean  = require('gulp-clean'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    minifycss    = require('gulp-minify-css'),
    livereload   = require('gulp-lifereload'),
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

gulp.taks('sass', function() {
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
  gulp.start('styles', 'fonts');
});

gulp.task('watch', function() {
  gulp.watch('src/', ['stylus']);
  livereload.listen();
})