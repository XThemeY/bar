const gulp = require('gulp')
const watch = require('gulp-watch')
const imageMinify = require('./imageMinify')
const styles = require('./styles')
const pug2html = require('./pug2html')
const fonts = require('./copyFonts')
const script = require('./script')
const browserSync = require('browser-sync').create()

// Запуск сервера
module.exports = function server(cb) {
	browserSync.init({
		server: "docs",
		socket: {
			domain: "localhost:3000"
		}
	})
	watch('./src/scss/**/*.scss', gulp.series(styles.dist, cb => gulp.src('docs/css').pipe(browserSync.stream()).on('end', cb)))
	watch('./src/pug/**/*.pug', gulp.series(pug2html.dist)).on('change', browserSync.reload)
	watch('./src/fonts/**/*.*', gulp.series(fonts)).on('change', browserSync.reload)
	watch('./src/img/**/*.*', gulp.series(imageMinify.dist)).on('change', browserSync.reload)
	watch('./src/js/**/*.*', gulp.series(script.dist)).on('change', browserSync.reload)
	return cb()
}