let tab;
let tabContent;

window.onload = () => {
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabsContent();
}

let hideTabsContent = () => {
  for(i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('white-border');
  }
}

document.getElementById('tabs').onclick = (event) => {
  let target = event.target;
  if(target.className == 'tab') {
    for(i = 0; i < tab.length; i++) {
      if(target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

let showTabsContent = (b) => {
  if(tabContent[b].classList.contains('hide')) {
    hideTabsContent();
    tab[b].classList.add('white-border');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}