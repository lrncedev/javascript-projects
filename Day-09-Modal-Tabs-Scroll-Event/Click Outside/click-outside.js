const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function handleCardBtnClick(e) {
  const button = e.currentTarget
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const cardDesc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  modalInner.innerHTML = 
  `
  <img width="400" height="400"  src="${imgSrc.replace('200','400')}" alt="${name}"/>
  <p>${cardDesc}</p>
  `;

  modalOuter.classList.add('open')
}

cardButtons.forEach(button => button.addEventListener('click', handleCardBtnClick))

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if(isOutside) {
    closeModal();
    window.addEventListener('keydown', event => {

      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }
})

