// Making swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true, 
});

// Hover effects for skills
const skillElements = document.querySelectorAll('.skill');
skillElements.forEach(skill => {
  skill.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#B3C5D7';
    this.style.color = '#fff';
  });

  skill.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '#eee';
    this.style.color = '#555';
  });
});

// Button to scroll to top
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Scroll to Top';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '10px';
scrollTopButton.style.right = '10px';
scrollTopButton.style.display = 'none';
scrollTopButton.style.zIndex = '1000';
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to top 
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

