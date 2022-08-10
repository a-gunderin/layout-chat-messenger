const { src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const svgSpriteConfig = {
	mode: {
		stack: {
			sprite: '../sprite.svg',
		},
	},
};

const buildSvgSprite = () => src('src/svg/**/*.svg')
	.pipe(svgSprite(svgSpriteConfig))
	.pipe(dest('dist/images/'));

module.exports = buildSvgSprite;
