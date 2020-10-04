
'use strict';
// variable
const preLoad = document.querySelector('.pre-load');

const navBtn = document.querySelector('.nav_btn'),
        nav = document.querySelector('.nav');

const switchV = document.querySelector('.v_switch'),
    switchBtn =document.querySelector('.v_switch_btn'),
     bgV = document.querySelector('.video');

const drinkForm = document.querySelector('.drink_form'),
         feedBack = document.querySelector('.drink_form_feedback');

const workIcons = document.querySelectorAll('.work_item_icon');


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


    //add customer
    addCustomer(customer){
        const images = [1,2,3,4,5];
        let random = Math.floor(Math.random()*images.length);
        const divPerson = document.createElement('div');
        divPerson.classList.add('person');
        divPerson.innerHTML =                 
        `<img src="img/person${random}.JPG" alt="person_thumnail">
        <h4 class="person_name">${customer.name}</h4>
        <h4 class="person_lastname">${customer.lastName}</h4>`

        const cardList = document.querySelector('.drink_card_list');
        cardList.appendChild(divPerson);
    };

    //clear Fields
    clearFields(){
        document.querySelector('.input_name').value = '';
        document.querySelector('.input_lastname').value = '';
        document.querySelector('.input_email').value ='';
    };

    // work Modal
    showModal(ev){
        if(ev.target.parentElement.classList.contains('work_item_icon')){
            let dataId = ev.target.parentElement.dataset.id;
            const modal = document.querySelector('.work_modal');
        }
    };
}; 


//오브젝트 구조의 함수
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
        let customer = new Customer(name, lastName, email);
        ui.addCustomer(customer);
        ui.showFeedback('customer added to the list','success');
        ui.clearFields();

    } else {
       ui.showFeedback('some form value empty', 'error');
       
    };
});

// modal
workIcons.forEach(function(item){
    item.addEventListener('click', function(ev){
       ui.showModal(ev);

    });
});


};

eventListener();
