const gulp = require('gulp')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const cleanCSS = require('gulp-clean-css')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

module.exports.build = function styles() {
	return gulp.src('./src/scss/main.scss')
		.pipe(plumber({
			errorHandler: notify.onError((err) => {
				return {
					title: 'Scss',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass({
			indentType: 'tab',
			indentWidth: 1,
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}))		
		.pipe(shorthand())
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css/'))
}

module.exports.dist = function styles() {
	return gulp.src('./src/scss/main.scss')
		.pipe(plumber({
			errorHandler: notify.onError((err) => {
				return {
					title: 'Scss',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(sassGlob())		
		.pipe(sass({
			indentType: 'tab',
			indentWidth: 1,
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}))		
		.pipe(shorthand())				
		.pipe(gulp.dest('./dist/css/'))	
}
