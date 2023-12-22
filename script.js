
let logoBurger = document.querySelector('.logo-burger');
let menuBurger = document.querySelector('.menu-burger');

logoBurger.addEventListener('click', function() {
   logoBurger.classList.toggle('active');
   menuBurger.classList.toggle('active');
}) 
/*
1. Показывается меню  |||logoBurger.classList.toggle('active');
2. Меню бургер, превращается в X |||menuBurger.classList.toggle('active');
*/ 


