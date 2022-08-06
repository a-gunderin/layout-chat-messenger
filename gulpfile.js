const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create('My Server');
const buildHtml = require('./gulp_tasks/html.js');
const buildCss = require('./gulp_tasks/css.js');
const uglifyJs = require('./gulp_tasks/js.js');

const browserSyncJob = () => {
	browserSync.init({ server: 'dist/' });
	watch('src/**/*.pug', series(buildHtml, buildCss));
	watch('src/scss/**/*.scss', buildCss);
	watch(['src/js/**/*.js', '!src/js/_min/**/*.js'], uglifyJs);
};

const development = () => {
	uglifyJs();
	buildHtml();
	buildCss();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = series(uglifyJs, buildHtml, buildCss);
exports.dev = development;
