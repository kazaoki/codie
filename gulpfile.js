const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const csslint      = require('gulp-csslint');
const autoPrefixer = require('gulp-autoprefixer');
const cssComb      = require('gulp-csscomb');
const cmq          = require('gulp-merge-media-queries');
const cleanCss     = require('gulp-clean-css');
const eslint       = require('gulp-eslint');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync');
const imageMin     = require('gulp-imagemin');
const cache        = require('gulp-cache');
const connectPhp   = require('gulp-connect-php');

/**
 * sass compile
 */
gulp.task('sass', ()=>{
	gulp.src(['src/scss/**/*.scss'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoPrefixer())
		.pipe(cssComb())
		.pipe(cmq({log:true}))
		.pipe(csslint())
		.pipe(csslint.formatter())
		// .pipe(gulp.dest('dist/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleanCss())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

/**
 * JS(ES) compile
 */
gulp.task('js', ()=>{
	gulp.src(['src/js/**/*.js'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({presets: ['env']}))
		.pipe(eslint(
			{
				useEslintrc: false,
				// rules: {
				// 	'strict': 2
				// },
				globals: [
					'jQuery',
					'$'
				],
				envs: [
					'browser'
				]
			})
		)
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(concat('bundle.js'))
		// .pipe(gulp.dest('dist/js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream())
});

/**
 * images compress
 */
gulp.task('image', ()=>{
	gulp.src(['src/images/**/*'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(cache(imageMin()))
		.pipe(gulp.dest('dist/images'))
});

/**
 * html/php files copy
 */
gulp.task('htmlphp', ()=>{
	gulp.src(['src/**/*.html', 'src/**/*.php'])
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});

/**
 * assets files copy
 */
gulp.task('assets', ()=>{
	gulp.src(['src/assets/**/*'])
		.pipe(gulp.dest('dist'))
});

/**
 * connect php
 */
gulp.task('connect-php', ()=>{
	connectPhp.server({
		base: './dist',
		stdio: 'ignore'
	});
});

/**
 * watch files change
 */
gulp.task('watch', ()=>{
	gulp.watch('src/js/**/*.js',['js']);
	gulp.watch('src/scss/**/*.scss',['sass']);
	gulp.watch('src/images/**/*',['image']);
	gulp.watch('src/**/*.html',['htmlphp']);
	gulp.watch('src/**/*.php',['htmlphp']);
});

/**
 * Sync server proxy: http://localhost:3000 -> localhost:80
 */
gulp.task('server', ()=>{
	browserSync.init({
		proxy: 'localhost:8000',
		// server: {
		// 	baseDir: 'dist'
		// }
	});
});

/**
 * build & watch
 */
gulp.task('dev', ['js', 'sass', 'image', 'htmlphp', 'connect-php', 'server', 'watch']);

/**
 * build only (default))
 */
gulp.task('default', ['js', 'sass', 'image', 'htmlphp']);
