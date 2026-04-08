const navLink = document.querySelector('.nav-link');
const menuBtn = document.querySelector('.icon-menu');

menuBtn.addEventListener('click', () => {
    navLink.classList.toggle('active');
});