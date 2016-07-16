module.exports = {
  port: 9000,
  server: './build/server/index.js',
  serverPath: './app/server',
  clientPath: './app/client',
  serverJsSource: './app/server/**/*.js',
  serverJsTarget: './build/server',
  clientJsSource: './app/client/**/*.js',
  clientJsTarget: './build/server',
};
