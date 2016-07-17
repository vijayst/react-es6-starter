module.exports = {
  host: 'localhost',
  port: 9000,
  otherPort: 3000,
  server: './build/server/index.js',
  clientSource: ['./app/client/**/*', '!./app/temp'],
  clientSourceJS: [
    './app/client/**/*.@(js|jsx)',
  ],
  clientSourceHTML: 'app/client/index.html',
  clientSourceCSS: [
    './app/client/styles/**/*.css',
  ],
  clientTarget: './build/client',
  temp: './app/temp',
  serverSource: './app/server',
  serverSourceJS: './app/server/**/*.js',
  serverTarget: './build/server',
  publicSource: './app/public/**/*',
  publicTarget: './build/public',
};
