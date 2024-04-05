const openMenuBtn = document.querySelector('.btn.open');
const closeMenuBtn = document.querySelector('.btn.close');
const menu = document.querySelector('.menu');

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
});
closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});

function showInnerLists() {
  const clickableItems = document.querySelectorAll('.clickable_item');
  const innerLists = document.querySelectorAll('.inner_list');
  const arrowIcons = document.querySelectorAll('.icon.arrow');
  const isHidden = [true, true];

  clickableItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      innerLists[index].classList.toggle('hidden');
      if (isHidden[index]) {
        arrowIcons[index].src = './images/icon-arrow-up.svg';
      } else {
        arrowIcons[index].src = './images/icon-arrow-down.svg';
      }
      isHidden[index] = !isHidden[index];
    });
  });
}

showInnerLists();
