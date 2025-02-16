const buttonCreate = document
  .querySelector('buttonCreate')
  .addEventListener('click', () => {
    buttonCreate.style.backgroundColor = ' #4E75FF';
    buttonCreate.style.color = 'white';
    buttonCreate.style.border = '1px solid #4E75FF';
    buttonCreate.style.borderRadius = '8px';
    buttonCreate.style.padding = '8px 16px 8px 16px';
    buttonCreate.gap = '10px';
  });
