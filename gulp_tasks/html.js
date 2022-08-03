const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').get('My Server');

const buildHtml = () =>
	src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
	.pipe(pug())
	.pipe(dest('dist/'))
	.pipe(browserSync.stream());

module.exports = buildHtml;