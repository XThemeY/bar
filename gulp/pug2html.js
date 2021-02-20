const gulp = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')


module.exports.build = function pug2html() {
	return gulp.src('./src/pug/pages/**/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError((err) => {
				return {
					title: 'Pug',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(`./build/`))
}

module.exports.dist = function pug2html() {
	return gulp.src('./src/pug/pages/**/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError((err) => {
				return {
					title: 'Pug',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(`./dist/`))
}


