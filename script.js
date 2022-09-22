let img  = document.querySelector('.img12');
let btn1 = document.querySelector('.btn1');
let btn0 = document.querySelector('.btn0');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let para = document.querySelector('.p12');
btn1.addEventListener('click', () => {
    img.src = 'images/category-3.jpg';
    para.innerHTML = 'products';
})
btn2.addEventListener('click', () => {
    img.src = 'images/category-1.jpg';
    para.innerHTML = 'in';
})
btn3.addEventListener('click', () => {
    
    img.src = 'images/Flag_of_Egypt.svg';
    para.innerHTML = 'Egypt';
})
btn0.addEventListener('click', () => {
    img.src = 'images/category-2.jpg';
    para.innerHTML = 'Best';
})