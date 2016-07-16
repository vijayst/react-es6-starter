import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import socketio from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection', (socket) => {
  socket.emit('greeting', { message: 'hello world' });
});

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  const indexFile = path.resolve(__dirname, '../client/index.html');
  res.sendFile(indexFile);
});

server.listen(9000, () => {
  console.log('listening on port 9000', __dirname);
});
