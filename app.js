
'use strict';
// variable
const preLoad = document.querySelector('.pre-load');

const navBtn = document.querySelector('.nav_btn'),
        nav = document.querySelector('.nav');

const switchV = document.querySelector('.v_switch'),
    switchBtn =document.querySelector('.v_switch_btn'),
     bgV = document.querySelector('.video');

     const drinkForm = document.querySelector('.drink_form');
let feedBack = document.querySelector('.drink_form_feedback');


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


    checkEmpty(name, lastName, email){
        let result;
        if(name === '' || lastName === '' || email === ''){
            result = false;
        } else {
            result = true;
        };
        return result;
    };


    showFeedback(text, type){

        if( type === 'success'){
            feedBack.classList.add('success');
            feedBack.innerText = text;
            this.removeAlert('success');

        } else if ( type === 'error'){
            feedBack.classList.add('error');
            feedBack.innerText = text;
            this.removeAlert('error');
        }
    };

    removeAlert(type){
        setTimeout(function(){
            feedBack.classList.remove(type);
        },3000);
    };
    //3뒤 에러메세지 사라짐

};


function Customer (name, lastName, email){
    this.name = name,
    this.lastName = lastName,
    this.email = email;
};



function eventListener (){
    const ui = new UI ();

//hide pre-load
window.addEventListener('load',() =>  ui.loading());

// nav menu
navBtn.addEventListener('click', () =>ui.toggleMenu());

// video switch
switchV.addEventListener('click', () => ui.videoControlls());

// drinkForm
drinkForm.addEventListener('submit', function(e){
    e.preventDefault();


const name = document.querySelector('.input_name').value,
lastName = document.querySelector('.input_lastname').value,
 email = document.querySelector('.input_email').value;

    let value =  ui.checkEmpty(name, lastName, email) 
    if(value){
        
       ui.showFeedback('customer added to the list','success');

    } else {
       ui.showFeedback('some form value empty', 'error');
       
    };

});


};

eventListener();
