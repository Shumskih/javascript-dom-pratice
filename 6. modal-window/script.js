let modal = document.getElementById('myModal');
let button = document.getElementById('myButton');
let span = document.getElementsByClassName('close')[0];

button.onclick = () => {
  modal.style.display = 'block';
}

span.onclick = () => {
  modal.style.display = 'none';
}

window.onclick = () => {
  if(event.target == modal) {
    modal.style.display = 'none';
  }
}