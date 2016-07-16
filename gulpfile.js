const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const config = require('./config');
const browserSync = require('browser-sync');

function startBrowserSync() {
  if (browserSync.active) {
    return;
  }
  gulp.watch(config.clientSource, ['buildClient']);

  const options = {
    proxy: `${config.host}:${config.port}`,
    port: config.otherPort,
    files: [config.clientTarget],
    injectChanges: true,
    reloadDelay: 1000,
  };
  browserSync(options);
}

gulp.task('serve', ['build'], () => {
  const options = {
    script: config.server,
    delayTime: 1,
    env: {
      PORT: config.port,
      NODE_ENV: 'dev',
    },
    watch: [config.serverSource],
  };
  return nodemon(options)
  .on('restart', ['buildServer'])
  .on('start', startBrowserSync);
});

gulp.task('build', ['buildServer', 'buildClient']);
gulp.task('buildClient', ['buildClientJS', 'copyHtml', 'copyPublic', 'copyModules']);

gulp.task('buildServer', () =>
gulp.src(config.serverSourceJS)
.pipe(babel({ presets: ['es2015'] }))
.pipe(gulp.dest(config.serverTarget))
);

gulp.task('buildClientJS', () =>
gulp.src(config.clientSourceJS)
.pipe(babel({ presets: ['es2015'] }))
.pipe(gulp.dest(config.clientTarget))
);

gulp.task('copyHtml', () =>
gulp.src(config.clientSourceHTML)
.pipe(gulp.dest(config.clientTarget))
);

gulp.task('copyPublic', () =>
gulp.src('app/public/**/*')
.pipe(gulp.dest('build/public'))
);

gulp.task('copyModules', () =>
gulp.src('app/node_modules/**/*')
.pipe(gulp.dest('build/node_modules'))
);
