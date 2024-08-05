let burger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');

burger.addEventListener('click' , ()=>{
    navigation.classList.toggle('responsive-header');
    // navigation.style.transition = 'height 3s ease-in';
})