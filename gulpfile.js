const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')


gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch("src/*.html").on("change", browserSync.reload);
})

gulp.task('styles', () => {
    return gulp.src('src/scss/**/*.+(scss|sass)')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
})

gulp.task('watch', () => {
    gulp.watch("src/scss/*.+(scss|sass)", gulp.parallel("styles"));
})

gulp.task('default', gulp.parallel('watch','server', 'styles'))