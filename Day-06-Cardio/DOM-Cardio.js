// Make a div
const div = document.createElement('div');
const list = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`
const img = document.createElement('img');

img.src = 'https://picsum.photos/500';
img.width = 250;
img.classList.add('cute');
img.alt = "cute puppy";
// add a class of wrapper to it

const div2 = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
  `

div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = list;
// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', div2);
// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add("warning");
myDiv.firstElementChild.remove();
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

generatePlayerCards = (name, age, height) => {
  const html = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button>&times Delete</button>
    </div>
    `
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard

let cardsHTML = generatePlayerCards('wes', 10, 150);
cardsHTML += generatePlayerCards('random', 5, 120);
cardsHTML += generatePlayerCards('kait', 7, 100);
cardsHTML += generatePlayerCards('snickers', 2, 80);

cardDiv.innerHTML = cardsHTML;


div.insertAdjacentElement('afterbegin', cardDiv);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed


const deleteBtn = document.querySelectorAll('button');

deleteBtn.forEach(button => button.addEventListener('click',()=> {
  button.parentElement.remove();
})) 

// select all the buttons!
// make out delete function
// loop over them and attach a listener