let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');        // toggles cancel icon
    navbar.classList.toggle('active');    // THIS is what slides the menu in
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');    // hide menu on scroll
};


const typed = new Typed('.multiple-text', {
     strings: ['Physical Fitness', 'Weight Gain', 'Bodybuilding','Strength Training', 'Fat Loss','Running'],
     typeSpeed: 60,
     backSpeed: 60,
     backDelay: 1000,
     loop: true,
   });
