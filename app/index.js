import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection', (socket) => {
  socket.emit('greeting', { message: 'hello world' });
});

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use('/scripts', express.static(`${__dirname}/client/`));

const jqueryJs = `${__dirname}/node_modules/jquery`;
app.use('/scripts', express.static(jqueryJs));
const angularJs = `${__dirname}/node_modules/angular/`;
app.use('/scripts', express.static(angularJs));
const bootstrapJs = `${__dirname}/node_modules/bootstrap/dist/js`;
app.use('/scripts', express.static(bootstrapJs));
const bootstrapCss = `${__dirname}/node_modules/bootstrap/dist/css`;
app.use('/styles', express.static(bootstrapCss));

app.get('/', (req, res) => {
  // res.sendFile(`${__dirname}/index.html`);
  res.send('hello world');
});

server.listen(9000, () => {
  console.log('listening on port 9000');
});
