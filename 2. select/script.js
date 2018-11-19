// Select
let mySelect = document.getElementById('mySelect');

mySelect.onchange = () => {
  let select = mySelect.selectedIndex;
  let options = document.getElementById('mySelect').options;
  alert('Selected option is ' + options[select].text);
}

// Range
let range = document.getElementById('range');
let p = document.getElementById('p-range');
let input = document.getElementById('input-range');
let div = document.getElementById('test');

range.addEventListener('input', () => {
  p.innerHTML = range.value;
  input.value = range.value;
  div.style.width = range.value + 'px';
})


