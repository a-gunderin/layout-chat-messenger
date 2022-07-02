const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const atomizer = require('gulp-atomizer');
const atomizerConfig = require('./atomizer-config.js');

const buildSass = () => src('app/scss/*.scss')
	.pipe(sass({
		includePaths: ['node_modules/normalize.css/'],
		sourceMap: false,
		outputStyle: 'compressed',
	}))
	.pipe(dest('build/css/'))
	.pipe(browserSync.stream());

const buildPug = () => src(['app/pug/**/*.pug', '!app/pug/**/_*.pug'])
	.pipe(pug())
	.pipe(dest('build/'))
	.pipe(browserSync.stream());

const atomicCss = () => src('build/**/*.html')
	.pipe(atomizer({
		acssConfig: atomizerConfig
	}))
	.pipe(dest('build/css/'))
	.pipe(browserSync.stream());

const browserSyncJob = () => {
	browserSync.init({ server: 'build/' });
	watch('app/scss/**/*.scss', buildSass);
	watch('app/**/*.pug', series(buildPug, atomicCss));
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