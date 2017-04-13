import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../config';

gulp.task('copy', () => {
  return gulp.src([
    `${config.appDir}/images/**/*`,
    `${config.appDir}/fonts/**/*`,
  ], { base: config.appDir })
    .pipe(plumber())
    .pipe(gulp.dest(config.distDir));
});
