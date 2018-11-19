let button = document.getElementById('button');
button.addEventListener('click', () => {
  let element = document.getElementById('animation');
  let position = 0;
  let id = setInterval(() => {
    if(position == 350) {
      clearInterval(id);
    } else {
      position++;
      element.style.top = position + 'px';
      element.style.left = position + 'px';
    }
  }, 10);
});