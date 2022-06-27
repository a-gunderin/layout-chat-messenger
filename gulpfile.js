const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const buildSass = () => src('app/sass/*.scss')
	.pipe(sass({
		sourceMap: false,
		OutputStyle: "compressed",
	}))
	.pipe(dest('build/styles/'));

const buildPug = () => src('src/pages/*.pug')
	.pipe(pug())
	.pipe(dest('build/'));

const browserSyncJob = () => {
	browserSync.init({ server: "build/" });
	watch('src/sass/*.scss', () => {
		buildSass();
		browserSync.stream();
	});
	watch('src/pages/*.pug', () => {
		buildPug();
		browserSync.stream();
	});
};

const development =() => {
	buildSass();
	buildPug();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
exports.dev = development;