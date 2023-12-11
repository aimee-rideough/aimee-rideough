const content = [
  'Phoebe Bridgers Digital Illustration - 2023',
  'Daiya Package Redesign - 2023',
  'Alien Poster Digital Illustration - 2022',
  'TeaBox Package Design Mockup - 2023',
  'The News Illustration - 2023',
  'Self Promo Illustration - 2023',
  'Elliot Digital Illustration - 2023',
  'Almonte - 2022',
  'Greenhouse 1 - 2022',
  'Greenhouse 2 - 2022',
  'Kosas Product Photography - 2022',
  'Thick Skull Illustration - 2023',
];

function openModal() {
  document.getElementById("lightbox").style.display = "block";
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  const slides = document.getElementsByClassName("lightbox-item");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  const descriptionText = document.getElementById("description");
  descriptionText.innerHTML = content[slideIndex - 1];
}
