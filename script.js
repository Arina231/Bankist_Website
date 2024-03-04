'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed Componenet

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //GUARD Clause
  if (!clicked) return;

  //remove active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //active tab
  clicked.classList.add('operations__tab--active');

  ///activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.add('sticky');
// });

///sticky navigation: Intersection Observer API

// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOption = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOption);
// observer.observe(section1);

const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///Reveal Section

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
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

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('onmouseenter: Great now you are reading the heading');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great now you are reading the heading');
// };
