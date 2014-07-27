var gulp      = require('gulp'),
    // component = require('gulp-component'),
    // stylus    = require('component-stylus-plugin'),
	shell = require('gulp-shell')

/* 
gulp.task('scripts', function () {
    gulp.src('component.json')
        .pipe(component.scripts({
            standalone: true
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('styles', function () {
    gulp.src('component.json')
        .pipe(component.styles({
            configure: function (builder) {
                builder.use(stylus)
            }
        }))
        .pipe(gulp.dest('build'))
})
 */

gulp.task('build', shell.task(
  'component build'
))

gulp.task('watch', function () {
    gulp.watch(['index.html', 'component.json', 'assets/**/*.js'], ['build'])
    gulp.watch(['index.html', 'component.json', 'assets/**/*.styl', 'assets/**/*.css'], ['build'])
})

gulp.task('default', ['scripts', 'styles'])