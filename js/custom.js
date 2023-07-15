
// Header Show
const Header = document.querySelector('header');

window.addEventListener('scroll', function(){
const scryTop = window.scrollY;

if(scryTop > 0){
    Header.classList.add('active');
}else{
    Header.classList.remove('active');
}
});


//Swiper Main slide Navigation
var swiper = new Swiper(".main-slides", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Swiper New Product section
var swiper = new Swiper(".product-slides", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


