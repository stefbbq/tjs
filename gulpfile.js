var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var webserver = require('gulp-webserver');
 
//sass
gulp.task('sass', function () {
 return gulp.src('./src/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist'));
})

gulp.task('sass:watch', function() {
	gulp.watch('./src/**/*.scss', ['sass'])
})

//server
gulp.task('webserver', function() {
	gulp.watch('./src/**/*.scss', ['sass'])
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
