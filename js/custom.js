
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

//Mobile Header Show
const MobileHeader = document.querySelector('.mobile-header');
window.addEventListener('scroll', function(){
  const MobilescryTop = window.scrollY;

  if(MobilescryTop > 0){
    MobileHeader.classList.add('active');
}else{
    MobileHeader.classList.remove('active');
}
});

////Mobile Menu,Close Icon
const MenuIcon = document.querySelector('.m-menu-icon');
const CloseIcon = document.querySelector('.m-close');
const MobileMenuwrap = document.querySelector('.mobile-menu-wrap');

MenuIcon.addEventListener('click', function(){
  MobileMenuwrap.style.display = "block";
});

CloseIcon.addEventListener('click', function(){
  MobileMenuwrap.style.display = "none";
});

//Swiper Main slide Navigation
var swiper = new Swiper(".main-slides", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  // Md Pick Section Tab Menu
  const btns = document.querySelectorAll('.btns button');
  const panels = document.querySelectorAll('.panels .panel'); 

function activeTabs(i){
  btns.forEach((btn) => {
    btn.classList.remove('active')
  });

  panels.forEach((panel) => {
    panel.style.display = 'none';
  });
  btns[i].classList.add('active');
  panels[i].style.display = 'block';

}

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () =>{
    activeTabs(idx);
  });
});


//Top Button
const topBtn = document.querySelector('.top-btn');
const up = document.querySelector('.up i');
const text = document.querySelector('.text');


window.addEventListener('scroll' , function(){
    const scrY = window.scrollY;
    // console.log(scrY)
    if(scrY > 824){
        topBtn.style.display='block';
    }else{
        topBtn.style.display='none';
    }if(scrY > 5472){
      up.classList.add('active');
      text.classList.add('active');
    }else{
      up.classList.remove('active');
      text.classList.remove('active');
    }
});
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  });
