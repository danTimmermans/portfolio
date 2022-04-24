// =================================
// 1. Déclaration des variables
// =================================
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
// =================================
// 2. Mes tâches
// =================================
// remplace moulinette de sass qui transforme nos .scss en .css
gulp.task('sassification', function () {
    return gulp.src('dev/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error' , sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function(path){
        path.basename += ".min";
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('prod/css'));
});

gulp.task('htmlification', function(){
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'));
})

gulp.task('jsification', function(){
    return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path){
        path.basename += ".min";
    }))
    .pipe(gulp.dest('prod/js'));
})

gulp.task('imagification', function(){
    return gulp.src('dev/img/*')
    .pipe(gulp.dest('prod/img'))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "prod/"
        }
    });
});
// =================================
// 3. Exécution des tâches
// =================================
gulp.task('observation', gulp.parallel('browser-sync','sassification', 'htmlification', 'jsification', 'imagification', function(){
    gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('dev/*.html', gulp.series('htmlification'));
    gulp.watch('dev/js/*.js', gulp.series('jsification'));
    gulp.watch('dev/img/', gulp.series('imagification'));
    gulp.watch("prod/**/*").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('observation'));
