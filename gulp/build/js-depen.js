import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../config';

gulp.task('js-depen', () => {
  return gulp.src([
        'node_modules/openlayers/dist/ol.js',
        'node_modules/openlayers/dist/ol-debug.js',
        'app/js/libs/ol.compile.js'
      ])
      .pipe(plumber())
      .pipe(gulp.dest(config.distDir + '/js'));
});
