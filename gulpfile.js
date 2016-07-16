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
    files: [config.clientTarget, config.publicTarget],
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
gulp.task('buildClient', ['copyIndex', 'copyPublic', 'browserify']);

gulp.task('buildServer', () =>
gulp.src(config.serverSourceJS)
.pipe(babel({ presets: ['es2015'] }))
.pipe(gulp.dest(config.serverTarget))
);

gulp.task('buildReact', () =>
gulp.src(config.clientSourceJS)
.pipe(babel({ presets: ['react', 'es2015'] }))
.pipe(gulp.dest(config.temp))
);

gulp.task('browserify', ['buildReact'], () =>
browserify({
  entries: [`${config.temp}/index.js`],
})
.bundle()
.pipe(source('main.js'))
.pipe(gulp.dest(config.publicTarget))
);

gulp.task('copyIndex', () =>
gulp.src(config.clientSourceHTML)
.pipe(gulp.dest(config.clientTarget))
);

gulp.task('copyPublic', () =>
gulp.src(config.publicSource)
.pipe(gulp.dest(config.publicTarget))
);
