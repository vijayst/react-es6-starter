module.exports = {
  host: 'localhost',
  port: 9000,
  otherPort: 3000,
  server: './build/server/index.js',
  clientSource: './app/client/**/*',
  clientSourceJS: './app/client/**/*.js',
  clientSourceHTML: 'app/client/**/*.html',
  clientTarget: './build/client',
  serverSource: './app/server',
  serverSourceJS: './app/server/**/*.js',
  serverTarget: './build/server',
};
