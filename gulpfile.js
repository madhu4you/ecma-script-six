const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");

const paths = {
    css: {
        src: "./src/scss/*.scss",
        dest: "./dist/css"
    },
    js: {
        src: "./src/js/*.js",
        dest: "./dist/js"
    },
    html: {
        src: "./src/*.html",
        dest: "./dist"
    }
}
const sassTask = () => {
    return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css.dest));
}

const jsTask = () =>  {
    return gulp.src(paths.js.src)
    .pipe(babel({
        "presets": ["@babel/preset-env"]
      }))
    .pipe(gulp.dest(paths.js.dest));
};

const htmlTask = () =>  {
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}


gulp.task("run", gulp.parallel(sassTask, jsTask, htmlTask));

gulp.task('watch', () => {
    gulp.watch(paths.css.src, sassTask);
    gulp.watch(paths.js.src, jsTask);
    gulp.watch(paths.html.src, htmlTask);
});

gulp.task("default", gulp.parallel('run', 'watch'));