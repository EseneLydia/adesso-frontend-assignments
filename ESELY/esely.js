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
let OpenForm = document.getElementById('contactbtn');
let CloseForm = document.getElementById('cancelbtn');

function openForm() {
  document.getElementById("popup-form").style.display = "block";
}
OpenForm.addEventListener('click', openForm)

function closeForm() {
  document.getElementById("popup-form").style.display = "none";
}
CloseForm.addEventListener('click', closeForm)

// form validation
function validateform(){
  let x = document.forms["myform"]["name"]["email"]["hobby"].value;
  if (x == ""){
    alert("Please enter your details");
    // return false;
  }
  else{
    alert("Thanks for submitting your details");
    return false;
  }
}

let myform = document.querySelector(".form-container");
myform.addEventListener('onsubmit', validateform)


