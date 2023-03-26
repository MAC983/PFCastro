// (function(){
//     const openButton = document.querySelector('.nav__menu');
//     const menu = document.querySelector('.nav__link--menu');
//     const closeMenu = document.querySelector('.nav__close');

//     openButton.addEventListener('click',()=>{
//         menu.classList.add('nav__link--show');
//     });

//     closeMenu.addEventListener('click',()=>{
//         menu.classList.remove('nav__link--show');
//     });

// })();

function classToggle(){
    const navs = document.querySelectorAll('.navbar__items')
    
    navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
}
    document.querySelector('.navbar__link-toggle')
    .addEventListener('click', classToggle);