const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create('My Server');
const buildHtml = require('./gulp_tasks/html.js');
const buildCss = require('./gulp_tasks/css.js');

const browserSyncJob = () => {
	browserSync.init({ server: 'dist/' });
	watch('src/scss/**/*.scss', buildCss);
	watch('src/**/*.pug', series(buildHtml, buildCss));
};

const development = () => {
	buildHtml();
	buildCss();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = series(buildHtml, buildCss);
exports.dev = development;
