const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const atomizer = require('gulp-atomizer');
const atomizerConfig = require('./atomizer-config.js');

const buildSass = () => src('src/scss/*.scss')
	.pipe(sass({
		includePaths: ['node_modules/normalize.css/'],
		sourceMap: false,
		outputStyle: 'compressed',
	}))
	.pipe(dest('dist/css/'))
	.pipe(browserSync.stream());

const buildPug = () => src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
	.pipe(pug())
	.pipe(dest('dist/'))
	.pipe(browserSync.stream());

const atomicCss = () => src('dist/**/*.html')
	.pipe(atomizer({
		acssConfig: atomizerConfig
	}))
	.pipe(dest('dist/css/'))
	.pipe(browserSync.stream());

const browserSyncJob = () => {
	browserSync.init({ server: 'dist/' });
	watch('src/scss/**/*.scss', buildSass);
	watch(['src/**/*.pug', 'src/js/**/*.js'], series(buildPug, atomicCss));
};

const development =() => {
	buildSass();
	buildPug();
	atomicCss();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, series(buildPug, atomicCss));
exports.dev = development;