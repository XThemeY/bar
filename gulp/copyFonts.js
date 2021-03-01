const gulp = require('gulp')

module.exports.build = function fonts() {
	return gulp.src('src/fonts/**/*.*')		
		.pipe(gulp.dest('./build/fonts/'))		
}

module.exports.dist = function fonts() {
	return gulp.src('src/fonts/**/*.*')		
		.pipe(gulp.dest('./docs/fonts/'))
}
