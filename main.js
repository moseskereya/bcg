const show = document.querySelector('nav')
const show2 = document.querySelector('.menu');
let ourStatus = 1

 show2.addEventListener('click', function(){
     if (ourStatus === 1) {
        show.style.visibility = 'hidden';
        ourStatus = 0
     }else{
        show.style.visibility = 'visible';
        ourStatus = 1;
     }
 })

 var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("back-content");
  const dots = document.querySelector('.dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
 setTimeout(showSlides, 4000)
};

   showSlides();
   
   function prev(n){
     showSlides (slideIndex -n)
   }
    function next(n){
     showSlides (slideIndex +n)
   }
