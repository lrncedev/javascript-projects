/*
  Selected the elements
  'tabs' was used to query inside itself 
  to select the element with "tab" and "tabpanel" role
*/

const tabs = document.querySelector('.tabs');
const tabButton = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

/* 
  Add click listener to all the buttons in the tabs class.
  Created a callback function called 'handleTabClick'
*/

tabButton.forEach(button =>{
  button.addEventListener('click', handleTabClick)
})



/* 
  handleTabClick performs looping:

  the tabPanel loop set all the panels hidden after clicking a tab button.

  tab button loop sets the aria selected attribute of all button to false, and then setting the clicked button to true instead.
  (Which means it is the currently selected tabbing, and also have CSS style)


  the id destructuring is suggested to use more methods from event object. (In this case, we only used the currentTarget property)

  elements with the same 'aria-labelledby' from its clicked button is assigned to the tabPanel variable.

  and then set the hidden property to false.

*/
function handleTabClick(event) {
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)

  tabPanels.forEach(panel => {
    panel.hidden = true;
  })

  tabButton.forEach(tab => {
    tab.ariaSelected = false;
    event.currentTarget.ariaSelected = true;
  })


  tabPanel.hidden = false;
}

