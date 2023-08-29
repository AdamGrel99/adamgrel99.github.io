// TODO
// 1) Working Contack section
// 2) Add some projects to portfolio and add option go to their website


// Header toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
})

// Typing Effect

let typed = new Typed('.auto-input', {
  strings: ['Adam Grelewicz'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
})

// Active Link State On Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');

// Get All Sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function(){
  const scrollPos = window.scrollY + 20;
  sections.forEach(section => {
    if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
          link.classList.add('active');
        }
      });
    }
  });
});

// Changing pictures 

let images = ['image/about-me-1.jpeg', 'image/about-me-2.jpg', 'image/about-me-3.jpg', 'image/about-me-4.jpg', 'image/about-me-5.jpg'];
let currentIndex = 0;
const imgElement = document.querySelector('#about .about-col .img-col img');

function changeSlide() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[currentIndex];
    imgElement.style.opacity = 1;
    currentIndex = (currentIndex + 1) % images.length;
  }, 500); 
}

window.addEventListener('load', function() {
  setInterval(changeSlide, 5000);
});