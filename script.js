'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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

////Scrolling///

btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  ///Scrolling Old MOdel
  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  ///scroll modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////PAge NAViGATION//////////

















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

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('onmouseenter: Great now you are reading the heading');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great now you are reading the heading');
// };
