'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// test comment

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// const header = document.querySelector('.header');
// ///creating elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'we use cookied for improved functinality and analytics ';
// message.innerHTML =
//   'we use cookied for improved functinality and analytics <button class="btn btn--close-cookie"> Got it!</button> ';

// // header.prepend(message);
// header.append(message);

// // /delete element//////////
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// ///style////

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ///Attributes////
// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.getAttribute('.designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

// //data Attribute
// console.log(logo.dataset.versionNumber);

