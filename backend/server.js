const { Server } = require('http');
const { RequestController } = require('./controllers/RequestController');

const server = new Server();
const requestController = new RequestController();

server.on('request', (req, res) => {
  requestController.on(req, res);
});

server.listen(8000);
