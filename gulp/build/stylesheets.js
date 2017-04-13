import gulp from "gulp";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import sass from "gulp-sass";
import notify from "gulp-notify";
import csso from "gulp-csso";
import sourcemaps from "gulp-sourcemaps";
import config from "../config";
import autoprefixer from "autoprefixer";

gulp.task('stylesheets', () => {
  const processors = [
    autoprefixer({ browsers: ['last 5 versions'] })
  ];

  var sassOpts = {
    outputStyle: 'nested',
    precison: 3,
    includePaths: [
        './node_modules/bootstrap-sass/assets/stylesheets',
        './node_modules/nprogress/'
    ]
  };

  if (config.development) {
    return gulp.src(`${config.appDir}/css/index.sass`)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass(sassOpts))
      .pipe(postcss(processors))
      .on('error', notify.onError())
      .pipe(csso())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${config.distDir}/css/`));
  }
  else {
    return gulp.src(`${config.appDir}/css/index.sass`)
      .pipe(plumber())
      .pipe(sass(sassOpts))
      .pipe(postcss(processors))
      .pipe(csso())
      .on('error', notify.onError())
      .pipe(gulp.dest(`${config.distDir}/css/`));
  }
});

gulp.task('stylesheets-sort', () => {

});
