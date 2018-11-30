
class ResponseHandler {
  process(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.end('response form server');
  }
}

module.exports = {
  ResponseHandler,
};
