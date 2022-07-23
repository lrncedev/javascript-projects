const wes = document.querySelector('.wes');
const form = document.querySelector('[name="signup"]');
const formName = document.querySelector('[name="name"]');
const formEmail = document.querySelector('[name="email"]');

wes.addEventListener('click', (e) => {
  console.log("Clicked the link");
  const shouldChangePage = confirm(
    "This website might be malicious! Do you wish to proceed?"
  );

  if(!shouldChangePage) {
    e.preventDefault();
  }
  
  console.log(shouldChangePage);
})

form.addEventListener('submit', function(e){
  // console.log(e);
  const nameInvalid = e.currentTarget.name.value;
  if(nameInvalid.includes('chad')) {
    alert("error, chad cant come here");
    e.preventDefault();
  }
})

// function logEvent(event) {
//   console.log(event.type);
//   console.log(event.currentTarget.value);
// }
// form.name.addEventListener("keyup", logEvent);