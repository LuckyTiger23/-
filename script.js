
function active(i){
    let grafic = document.getElementsByClassName('header__slider-btn');
    let act = document.querySelector('.active');
    act.classList.remove('active');
    grafic[i].classList.add('active');
}


const left = document.querySelector('.header__slider-btn-left');
const right = document.querySelector('.header__slider-btn-right');
let num = 0;
let j = 0; 

right.addEventListener('click', () => {

    if( num != -3840){
        j++
        active(j);
        num -= 1920;
        document.querySelector('.header__slider').style.left = num +'px';
    }
});

left.addEventListener('click', () => {
    
    if( num != 0){
        j--
        active(j);
        num += 1920;
        document.querySelector('.header__slider').style.left = num +'px';
    }
});

//button all service
const size = document.querySelector('.all-service');

size.addEventListener('click', () => {
    document.querySelector('.service__list').style.height ='100%';
    size.style.display = 'none';
});



//btn in feedback

const leftbtn = document.querySelector('.feedback-btn-left');
const rightbtn = document.querySelector('.feedback-btn-right');
const as = document.getElementsByClassName('feedback__block');
let l = 0;

rightbtn.addEventListener('click', () => {
    
    if( l != 5){
        as[l].style.display = 'none';
        l++
    }
});

leftbtn.addEventListener('click', () => {
    
    if( l != -1){
       as[l].style.display = 'block';
       l--;
    }
});



// burger

const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu-nav');
const closes = document.querySelector('.close');
const add = document.querySelector('.header__slider-text');

burger.addEventListener('click', () => {
    if(burger.style.display != "none"){
        menu.style.display = "flex"
        closes.style.display = "block"
        burger.style.display = "none"
        add.style.display = "none"
    }
});
    
    closes.addEventListener('click', () => {
    if(closes.style.display != "none"){
        menu.style.display = "none"
        closes.style.display = "none"
        burger.style.display = "block"    
        add.style.display = "block"

    }
});