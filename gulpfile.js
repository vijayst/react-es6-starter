const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', ['buildJs', 'copyHtml', 'copyPublic', 'copyModules']);

gulp.task('buildJs', ['buildLib', 'buildModels', 'buildClient', 'buildIndex']);

gulp.task('buildModels', () =>
  gulp.src('app/models/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('build/models'))
);

gulp.task('buildLib', () =>
  gulp.src('app/lib/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('build/lib'))
);

gulp.task('buildClient', () =>
  gulp.src('app/client/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('build/client'))
);

gulp.task('buildIndex', () =>
  gulp.src('app/index.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('build'))
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
