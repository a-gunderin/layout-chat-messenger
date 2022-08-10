const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create('My Server');
const buildHtml = require('./gulp_tasks/html');
const buildCss = require('./gulp_tasks/css');
const uglifyJs = require('./gulp_tasks/js');
const buildSvgSprite = require('./gulp_tasks/svg');

const browserSyncJob = () => {
	browserSync.init({ server: 'dist/' });
	watch('src/**/*.pug', series(buildHtml, buildCss));
	watch('src/scss/**/*.scss', buildCss);
	watch(['src/js/**/*.js', '!src/js/_min/**/*.js'], series(uglifyJs, buildHtml));
};

const development = () => {
	buildSvgSprite();
	uglifyJs();
	buildHtml();
	buildCss();
	browserSyncJob();
};

exports.server = browserSyncJob;
exports.build = series(buildSvgSprite, uglifyJs, buildHtml, buildCss);
exports.dev = development;
exports.buildSvgSprite = buildSvgSprite;
