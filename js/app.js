const menu = document.querySelector('.nav__menu');
const navLogo = document.querySelector('.nav__logo');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function(){
    menuList.classList.toggle('nav__list--show');
    menu.style.visibility = 'hidden';
    navLogo.style.filter = 'invert(100%)';

});

links.forEach(function(link){
    link.addEventListener('click', function(){
        menuList.classList.remove('nav__list--show');
        menu.style.visibility = 'visible';
        navLogo.style.filter = 'none';

    });
});


