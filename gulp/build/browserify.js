import gulp from "gulp";
import rename from "gulp-rename";
import source from "vinyl-source-stream";
import browserify from "browserify";
import browserifyShim from "browserify-shim";
import pugify from "pugify";
import watchify from "watchify";
import minifyify from "minifyify";
import notify from "gulp-notify";
import config from "../config";
// import babelify from 'babelify';

const entryPoint = `./${config.appDir}/js/main.js`;

gulp.task('browserify', () => {
  const bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: false,
    debug: config.development,
    extensions: ['.pug', '.js'],
    entries: entryPoint,
    paths: [
      `${config.appDir}/src`,
      `${config.appDir}/lib`
    ]
  })
  .transform(pugify)
  .transform(browserifyShim);
  // .transform(babelify.configure({
  //   presets: ['es2015'],
  //   plugins: ['transform-decorators-legacy'],
  //   sourceMapRelative: config.appDir
  // }));

  const bundle = () => {
    const bundleStream = bundler.bundle();

    return bundleStream
      .on('error', notify.onError())
      .pipe(source(entryPoint))
      .pipe(rename('js/main.js'))
      .pipe(gulp.dest(config.distDir));
  };

  if (config.development) {
    watchify(bundler).on('update', bundle);
  }
  else {
    bundler.plugin(minifyify, { map: false });
  }

  return bundle();
});
