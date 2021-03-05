const gulp = require('gulp')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify');
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

module.exports.build = function script() {
	return gulp.src('src/js/**/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./build/js/'))

}

module.exports.dist = function script() {
	return gulp.src('src/js/**/*.js')
		// Линтеры, настроить.
		// .pipe(eslint())
		// .pipe(eslint.format())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./docs/js/'))

}