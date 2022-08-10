const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassOptions = {
	includePaths: ['node_modules/normalize.css/'],
	sourceMap: false,
};
const browserSync = require('browser-sync').get('My Server');
const atomizer = require('gulp-atomizer');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const autoprefixerOptions = {
	cascade: false,
	flexbox: false,
};
const cleanCSS = require('gulp-clean-css');
const atomizerConfig = require('../atomizer');

const cleanCSSOptions = {
	level: {
		1: { specialComments: false },
	},
};

const compileSass = () => src('src/scss/*.scss')
	.pipe(sass(sassOptions))
	.pipe(dest('dist/css/src/'));

const buildAtomicCss = () => src('dist/**/*.html')
	.pipe(atomizer({ acssConfig: atomizerConfig }))
	.pipe(dest('dist/css/src/'));

const buildCss = () => {
	compileSass();
	buildAtomicCss();

	return src(['dist/css/src/main.css', 'dist/css/src/atomic.css'])
		.pipe(concat('main.min.css'))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(cleanCSS(cleanCSSOptions))
		.pipe(dest('dist/css/'))
		.pipe(browserSync.stream());
};

module.exports = buildCss;
