const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports.build = function imgMinify() {
	return gulp.src('src/img/**/*.{gif,jpg,png,svg}')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/img'))
}

module.exports.dist = function imgCopy() {
	return gulp.src('src/img/**/*.{gif,jpg,png,svg}')		
		.pipe(gulp.dest('./docs/img'))
}