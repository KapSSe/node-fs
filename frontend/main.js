import FormHandler from './scripts/form';

const onLoaded = () => {
  const formHandler = new FormHandler('form');
  formHandler.init();
};

document.addEventListener('DOMContentLoaded', onLoaded);
