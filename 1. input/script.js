let checkbox = document.getElementById('one');
checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        alert('Checked');
    } else {
        alert('Not checked');
    }
});

let radios = document.getElementsByName('r1');
let button = document.getElementById('button');
button.addEventListener('click', () => {
    for(i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            alert('Checked element ' + i + '.');
        }
    }
});