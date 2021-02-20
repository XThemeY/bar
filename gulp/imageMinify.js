const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

 module.exports.build = function imgMinify() {
	return gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/img'))
}

module.exports.dist = function imgCopy() {
	return gulp.src('src/img/*')		
		.pipe(gulp.dest('./dist/img'))
}