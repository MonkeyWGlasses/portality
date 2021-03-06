var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');
var addsrc = require('gulp-add-src');

module.exports = [['clean:js:client'], function() {
	return gulp.src(['app/clientJs/**/!(main)*.js','app/clientJs/main.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(addsrc(['node_modules/socket.io/node_modules/socket.io-client/socket.io.js','node_modules/phaser/dist/phaser.js']))
	.pipe(uglify('main.min.js', {
		mangle: false,
		output: {
			beautify: true
		}
	}).on('error', function(){}))
	.pipe(gulp.dest('dist/public'));
}];