const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassCompile = () => gulp.src('eleventy/css/**/*.scss')
    .pipe(sass({
        includePaths: [ 'node_modules' ],
        quietDeps: true
    }).on('error', sass.logError))
    .pipe(gulp.dest('eleventy/_site/css'));

const sassWatch = () => gulp.watch([
    './_config.scss',
    './functions/**/*.scss',
    './mixins/**/*.scss',
    './styles/**/*.scss',
    './eleventy/css/**/*.scss'
], sassCompile);

exports.build = sassCompile;

exports.serve = gulp.series(sassCompile, sassWatch);
