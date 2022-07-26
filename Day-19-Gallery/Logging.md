Created a closure named imageGallery that accepts an argument.
created a variable that calls imageGallery function (at the bottom of the codebase) that will pass the class of 'gallery1' and 'gallery2' as an argument. 

Selected the modal class, previous, and next buttons using querySelector.

Also created an array based from the parameter's images. 

Next, we created a function to open the modal. 
Using classlist, we add a class 'open' IF the modal do not have it yet. 

For closing the modal, we also used the classlist, but instead of add, we used remove and removed the class 'open'.

the 'handleClickOutside' function takes the event as a parameter, then we compare if the **target** is stricly equal to the **currentTarget**. Which means that if we clicked outside (which is currentTarget). This only possible because of the pointer events in CSS.

showImage function expects a parameter, this parameters is the element. By using the parameter, we will assign the values from the parameter into the modal's children. and will then call the openModal function.


In the showNext/shoPrevious, we called the showImage function, and we passed the element referencing on what image to show.

