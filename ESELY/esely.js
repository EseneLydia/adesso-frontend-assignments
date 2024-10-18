const nav = document.querySelector('.topnav');
const OpenBtn = document.querySelector('#nav-toggle-open');
const CloseBtn = document.querySelector('#nav-toggle-close');

// function to open nav menu
const OpenNav  = () => {
    nav.style.style.display = 'flex';
    OpenBtn.style.display = 'none';
    CloseBtn.style.display = 'inline-block';
}
OpenBtn.addEventListener('click', OpenNav)

// function to close nav menu
const CloseNav  = () => {
    nav.style.style.display = 'none';
    OpenBtn.style.display = 'inline-block';
    CloseBtn.style.display = 'none';
}
CloseBtn.addEventListener('click', CloseNav)

// For hero slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// script for form
let OpenForm = document.getElementsByClassName('contactbtn');
let CloseForm = document.getElementsByClassName('qcancelbtn');

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
OpenForm.addEventListener('click', openForm)

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
CloseForm.addEventListener('click', closeForm)
