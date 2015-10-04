var gulp = require('gulp'),
	connect = require('gulp-connect'),
	bower = require('gulp-bower'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	images = require('gulp-imagemin');


var config = {
	sass: './resources/sass',
	cssDest: './public/css',
	image: './resources/images/**/*',
	imageDest: './public/images',
	bowerDir: './bower_components'
};


gulp.task('webserver', function(){
	connect.server();
});


gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir))
});


gulp.task('sass', function () {
  gulp.src(config.sass + '/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.cssDest));
});

 
gulp.task('sass:watch', function () {
  gulp.watch(config.sass + '/*.scss', ['sass']);
});


gulp.task('images', function() {
    return gulp.src([config.image + '.png', config.image + '.jpg', config.image + '.gif', config.image + '.jpeg'])
    .pipe(images({ progressive: true }))
    .pipe(gulp.dest(config.imageDest));
});


gulp.task('default', ['webserver', 'sass', 'images']);

