var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}














// Получаем элементы стрелок и контейнер с отзывами
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const reviewContainer = document.querySelector(".review-container");

// Обработчик для прокрутки влево
scrollLeft.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: -300, // Прокрутка на 300px влево
    behavior: "smooth"
  });
});

// Обработчик для прокрутки вправо
scrollRight.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: 300, // Прокрутка на 300px вправо
    behavior: "smooth"
  });
});




const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.header-right');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });



  const slides = [
    {
        quote: `"This is my favourite place since I visited it last year. Highly recommend!"`,
        author: "Slavik Khomutets",
        avatar: "blog.webp"
    }
  
];

const sliderContent = document.getElementById('slider-content');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(index) {
    const slide = slides[index];
    sliderContent.innerHTML = `
        <p class="quote">${slide.quote}</p>
        <p class="author">${slide.author}</p>
        <img src="${slide.avatar}" alt="${slide.author}" class="avatar">
    `;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
    currentSlide = index;
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000);

// Initialize first slide
showSlide(0);



document.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".image");
  const triggerHeight = window.innerHeight / 1.2;

  images.forEach((image) => {
      const top = image.getBoundingClientRect().top;
      if (top < triggerHeight) {
          image.style.opacity = "1";
          image.style.transform = "translateY(0)";
      }
  });
});
