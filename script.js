const MenuOpenButton = document.querySelector("#Menu-open-button")
const  MenuCloseButton = document.querySelector("#Menu-close-button")
// toggle mobile menu visisbility
 MenuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-Menu")
 } );
//   close menu when the closh button is clicked
 MenuCloseButton.addEventListener("click", () =>  MenuOpenButton.click 
 ());


 const swiper = new  Swiper('.slider-contenter ', {
  
  loop: true,
  grapCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   For responsiv

breakpoint: {
 0:{
   slidesPerView : 1
 },

  768:{
   slidesPerView : 2
 },
 1024:{
    slidesPerView : 3
 }

}


  
});
