const gulp = require('gulp'),
	pug = require('gulp-pug'),
	fs = require('fs'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	spritesmith = require('gulp.spritesmith'),
	sassGlob = require('gulp-sass-glob'),
	sourcemaps = require('gulp-sourcemaps'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	cssunit = require('gulp-css-unit'),
	del = require('del'),
	data = require('gulp-data');

// server
gulp.task('server', function() {
	browserSync.init({
		open: true,
		notify: false,
		server: {
			baseDir: "./dist",
		}
	});
});

gulp.task('sass', () => {
	return gulp.src('./src/blocks/main.+(scss|sass)')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers : ['> 5%'],
			cascade : true
		}))
		// .pipe(cssunit({
		// 	type: 'px-to-rem',
		// 	rootSize: 16
		// }))
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(reload({stream : true}));
});

//==== TODO task for recieve data from content.json without restart gulp

gulp.task('pug', () => {
	var locals;
	gulp.src('src/blocks/*.pug')
		.pipe(plumber())
		// .pipe(data(function() {
		// 	return JSON.parse(fs.readFileSync('./content.json', 'utf8'));
		// }))
		.pipe(pug({
			locals: JSON.parse(fs.readFileSync('./content.json', 'utf8')),
			pretty: '	'
		}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream : true}));
});


//copy fonts to dist
gulp.task('fontsBuild', ['removedist'], function() {
	return gulp.src('src/fonts/*/**')
		.pipe(gulp.dest('dist/fonts/'));
});

//copy images to outputDir
gulp.task('imgBuild', ['removedist'], function() {
	return gulp.src('src/img/**/*.*')
		//.pipe(imagemin())
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('sprite', function () {
	var spriteData = gulp.src(
		'./src/img/icons/*.png'
	).pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.sass',
		cssFormat: 'css',
		imgPath: '../img/sprite.png',
		padding: 70
	}));

	spriteData.img.pipe(gulp.dest('./dist/img'));
	// spriteData.css.pipe(gulp.dest('./src/styles/sprite'));
});

// task for clean dist folder before start watch
gulp.task('removedist', function() { return del.sync('dist'); });

gulp.task('watch', () => {
	gulp.watch('src/**/*.pug', ['pug']);

	gulp.watch('src/**/*.+(scss|sass)', ['sass']);
});

gulp.task('default',
	['removedist', 'fontsBuild', 'imgBuild', 'sass', 'pug', 'sprite', 'server', 'watch']
);
