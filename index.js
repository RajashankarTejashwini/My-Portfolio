// script.js
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = document.querySelector('.hamburger-icon');
const crossIcon = document.querySelector('.cross-icon');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
    hamIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
});
