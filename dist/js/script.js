//Humberger
const Humberger = document.querySelector('#Humberger')
const navmenu =document.querySelector('#nav-menu')

Humberger.addEventListener('click', function() {
Humberger.classList.toggle('Humberger-active');
navmenu.classList.toggle("hidden");
});

//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};