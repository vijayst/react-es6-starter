module.exports = {
  host: 'localhost',
  port: 9000,
  otherPort: 3000,
  server: './app/build/server/index.js',
  clientSource: ['./app/client/**/*', '!./app/temp', '!./app/build'],
  clientSourceJS: [
    './app/client/**/*.@(js|jsx)',
  ],
  clientSourceHTML: 'app/client/index.html',
  clientSourceCSS: [
    './app/client/styles/**/*.css',
  ],
  clientTarget: './app/build/client',
  temp: './app/temp',
  serverSource: './app/server',
  serverSourceJS: './app/server/**/*.js',
  serverTarget: './app/build/server',
  publicSource: './app/public/**/*',
  publicTarget: './app/build/public',
};
