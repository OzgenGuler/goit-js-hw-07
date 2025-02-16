document.querySelector('#name-input').addEventListener('input', event => {
  event.preventDefault();
  let result = event.target.value.trim();
  if (result !== null && result !== '') {
    document.querySelector('#name-output').textContent = result;
  } else {
    document.querySelector('#name-output').textContent = 'Anonymous';
  }
});
