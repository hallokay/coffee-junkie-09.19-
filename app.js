
'use strict';
// variable
const preLoad = document.querySelector('.pre-load');

const navBtn = document.querySelector('.nav_btn'),
        nav = document.querySelector('.nav');

const switchV = document.querySelector('.v_switch'),
    switchBtn =document.querySelector('.v_switch_btn'),
     bgV = document.querySelector('.video');


    //  function class
class UI {
    loading(){
        preLoad.style.display = "none";
    };

    toggleMenu(){
        nav.classList.toggle("open");
    };
    
    videoControlls(){
        if(!switchBtn.classList.contains('v_off')){
            switchBtn.classList.add("v_off");   
            bgV.pause();
        } else {
            switchBtn.classList.remove("v_off");
            bgV.play();
        };
        
    };
};




function eventListener (){
    const ui = new UI ();

//hide pre-load
window.addEventListener('load',() =>  ui.loading());

// nav menu
navBtn.addEventListener('click', () =>ui.toggleMenu());

// video switch
switchV.addEventListener('click', () => ui.videoControlls());






};

eventListener();
