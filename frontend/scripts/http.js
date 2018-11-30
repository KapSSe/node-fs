
export default class HTTP {
  static open(data) {
    this[data.method](data);
  }

  static GET(data) {
    const req = new XMLHttpRequest();
    const url = `${data.url}/${data.payload}`;
    req.open(data.method, url, data.async);
    req.send();
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          console.log(req.responseText);
        }
      }
    };
  }

  static POST(data) {
    console.log(data);
  }

  static DELETE(data) {
    const req = new XMLHttpRequest();
    const url = `${data.url}/${data.payload}`;
    req.open(data.method, url, data.async);
    req.send();
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          console.log(req.responseText);
        }
      }
    };
  }
}
