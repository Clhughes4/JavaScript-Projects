function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
}

var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function toSlide(n) {
  showSlide(slideIndex = n);
}


function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}
