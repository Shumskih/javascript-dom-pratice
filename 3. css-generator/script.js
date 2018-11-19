function corner() {
  let rangeTopLeft = document.getElementById('range-top-left').value;
  let textTopLeft = document.getElementById('text-top-left');
  let rangeTopRight = document.getElementById('range-top-right').value;
  let textTopRight = document.getElementById('text-top-right');
  let rangeBottomLeft = document.getElementById('range-bottom-left').value;
  let textBottomLeft = document.getElementById('text-bottom-left');
  let rangeBottomRight = document.getElementById('range-bottom-right').value;
  let textBottomRight = document.getElementById('text-bottom-right');

  let block = document.getElementById('block');
  
  textTopLeft.value = rangeTopLeft;
  textTopRight.value = rangeTopRight;
  textBottomLeft.value = rangeBottomLeft;
  textBottomRight.value = rangeBottomRight;

  block.style.borderRadius = rangeTopLeft + 'px ' + rangeTopRight + 'px ' + rangeBottomRight + 'px ' + rangeBottomLeft + 'px ';
}