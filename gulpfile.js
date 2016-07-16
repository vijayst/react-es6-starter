const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');
const config = require('./config');

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
gulp.task('buildClient', ['buildClientJS', 'copyHtml', 'copyPublic']);

gulp.task('buildServer', () =>
gulp.src(config.serverSourceJS)
.pipe(babel({ presets: ['es2015'] }))
.pipe(gulp.dest(config.serverTarget))
);

gulp.task('buildClientJS', () =>
gulp.src(config.clientSourceJS)
.pipe(browserify({
  entries: ['./app/client/index.js'],
  transform: [reactify],
}).bundle())
.pipe(source('index.js'))
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
