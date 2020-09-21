
'use strict';

//hide pre load
const preLoad = document.querySelector('.pre-load');
window.addEventListener('load', function(){
    preLoad.style.display = "none";
});

// nav menu
const navBtn = document.querySelector('.nav_btn'),
    nav = document.querySelector('.nav');

navBtn.addEventListener('click', function(){
    nav.classList.toggle("open");
});

