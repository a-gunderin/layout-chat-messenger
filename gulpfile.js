const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const buildSass = () => src('app/scss/*.scss')
	.pipe(sass({
		sourceMap: false,
		OutputStyle: "compressed",
	}))
	.pipe(dest('build/css/'))
	.pipe(browserSync.stream());

const buildPug = () => src('app/*.pug')
	.pipe(pug())
	.pipe(dest('build/'))
	.pipe(browserSync.stream());

const browserSyncJob = () => {
	browserSync.init({ server: "build/" });
	watch('app/scss/*.scss', buildSass);
	watch('app/*.pug', buildPug);
};

const development =() => {
	browserSyncJob();
	buildSass();
	buildPug();
};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
exports.dev = development;