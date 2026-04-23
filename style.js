const navLink = document.querySelector('.nav-link');
const menuBtn = document.querySelector('.icon-menu');

menuBtn.addEventListener('click', () => {
    navLink.classList.toggle('active');
});

const bc = Array.from(document.querySelectorAll('.bc1, .bc2, .bc3, .bc4'));

let stack = [...bc];

function updateZindex(){
    stack.forEach((el, index) =>{
        el.style.zIndex = index + 1;
    });
}
bc.forEach(box =>{
    box.addEventListener('click', () => {
        stack = stack.filter(el => el !== box);

        stack.push(box);

        updateZindex();
    });
});

updateZindex();
