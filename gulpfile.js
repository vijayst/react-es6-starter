const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const config = require('./config');

gulp.task('serve', ['build'], () => {
  const options = {
    script: config.server,
    delayTime: 1,
    env: {
      PORT: config.port,
      NODE_ENV: 'dev',
    },
    watch: [config.serverPath, config.clientPath],
  };
  return nodemon(options)
  .on('restart', ['build']);
});

gulp.task('build', ['buildJs', 'copyHtml', 'copyPublic', 'copyModules']);

gulp.task('buildJs', ['buildServer', 'buildClient']);

gulp.task('buildServer', () =>
  gulp.src(config.serverJsSource)
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest(config.serverJsTarget))
);

gulp.task('buildClient', () =>
  gulp.src(config.clientJsSource)
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest(config.clientJsTarget))
);

gulp.task('copyHtml', () =>
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build'))
);

gulp.task('copyPublic', () =>
  gulp.src('app/public/**/*')
  .pipe(gulp.dest('build/public'))
);

gulp.task('copyModules', () =>
  gulp.src('app/node_modules/**/*')
  .pipe(gulp.dest('build/node_modules'))
);
