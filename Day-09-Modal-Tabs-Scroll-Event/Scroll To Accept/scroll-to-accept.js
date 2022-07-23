/* 
Variables selecting elements
*/

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

/* 
  The callback function being passed into the IObserver object

*/
function obCallback(payload) {
  console.log(payload)

  /* The payload parameter here 
  is the argument passed from the observe method
  */
  if(payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
  else {
    button.disabled = true;
  }
}

/* IntersectionObserver API 
  observes the changes in intersection of root and target element

  Accepts options object argument
*/
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 0.1
});

/*
  "observe" method from IO API watches/observes the argument.
  In this case, the last element of the terms(class name) variable which is actually an HR tag
*/
ob.observe(terms.lastElementChild);

