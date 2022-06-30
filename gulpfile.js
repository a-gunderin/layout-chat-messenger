const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const buildSass = () => src('app/scss/*.scss')
	.pipe(sass({
		includePaths: ["node_modules/bootstrap/scss/"],
		sourceMap: false,
		outputStyle: 'compressed',
	}))
	.pipe(cleanCSS({
		level: {
			1: { specialComments: false }
		}
	}))
	.pipe(dest('build/css/'))
	.pipe(browserSync.stream());

const buildPug = () => src(['app/pug/**/*.pug', '!app/pug/**/_*.pug'])
	.pipe(pug())
	.pipe(dest('build/'))
	.pipe(browserSync.stream());

const browserSyncJob = () => {
	browserSync.init({ server: 'build/' });
	watch('app/scss/**/*.scss', buildSass);
	watch('app/**/*.pug', buildPug);
};

const development =() => {
	buildSass();
	buildPug();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
exports.dev = development;