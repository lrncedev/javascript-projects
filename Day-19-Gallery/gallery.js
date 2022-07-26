function imageGallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery Found!');
  }

  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  const images = Array.from(gallery.querySelectorAll('img'));

  images.forEach(image => image.addEventListener('click', (e)=> showImage(e.currentTarget)));
  modal.addEventListener('click', handleClickOutside);
  
  function openModal() {
    if (modal.matches(".open")) {
      return;
    }
    modal.classList.add("open");
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
    window.addEventListener('keyup', handleKeyUp);
  }

  function closeModal() {
    modal.classList.remove('open');

    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPreviousImage);
    window.removeEventListener('keyup', handleKeyUp);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function handleKeyUp(event) {
    switch (event.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowRight":
        showNextImage();
        break;
      case "ArrowLeft":
        showPreviousImage();
        break;
      default:
        break;
    }
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPreviousImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  
  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('img').style.height = "550px";
    modal.querySelector('p').textContent = el.dataset.description;
    console.log(el);
    currentImage = el;

    openModal();
  }
}

const gallery1 = imageGallery(document.querySelector('.gallery1'))
const gallery2 = imageGallery(document.querySelector('.gallery2'))

