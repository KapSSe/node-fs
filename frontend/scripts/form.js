import HTTP from './http';

export default class FormHandler {
  constructor(selector) {
    this.selector = selector;
    this.formsState = [];
    this.http = new HTTP();
  }

  init() {
    this.initListeners();
  }

  selectForms() {
    return document.querySelectorAll(this.selector);
  }

  initListeners() {
    this.selectForms().forEach((form) => {
      form.addEventListener('click', (e) => {
        this.eventListener(e);
      });
    });
  }

  eventListener(e) {
    if (e.target.nodeName === 'BUTTON') {
      e.preventDefault();
      this.http.constructor.open({
        method: e.currentTarget.id,
        url: 'http://localhost:8000',
        async: true,
        payload: e.currentTarget.querySelector('input').value,
      });
    }
  }
}
