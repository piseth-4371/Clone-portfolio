const hamburher = document.querySelector('.icon-menu');
const navlinks = document.querySelector('.nav-link');
let menuOpen = false;

hamburher.addEventListener('click', () =>{
    if(menuOpen == false){
        navlinks.style.display = "block";
        menuOpen = true;
    }
    else if(menuOpen == true){
        navlinks.style.display ="none";
        menuOpen = false;
    }
});
