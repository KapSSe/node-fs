const { RequestHandler } = require('./utils/RequestHandler');
const { ResponseHandler } = require('./utils/ResponseHandler');


class RequestController {
  constructor() {
    this.requestHandler = new RequestHandler();
    this.responseHandler = new ResponseHandler();
  }

  on(req, res) {
    this.requestHandler.process(req);
    this.responseHandler.process(res);
  }
}

module.exports = {
  RequestController,
};
