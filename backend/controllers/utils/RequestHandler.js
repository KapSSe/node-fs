
class RequestHandler {
  process(req) {
    this.req = req;
    this.constructor[this.req.method.toLowerCase()]();
  }

  static get() {
    console.log('get');
  }

  static post() {
    console.log('post');
  }

  static delete() {
    console.log('delete');
  }
}

module.exports = {
  RequestHandler,
};
