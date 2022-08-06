const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;

const uglifyJs = () => 
	src(['src/js/**/*.js', '!src/js/_min/**/*.js'])
	.pipe(uglify())
	.pipe(dest('src/js/_min/'));

module.exports = uglifyJs;