# This project is based on Wes Bos' Face Detection and Censorship #


## SET UP THE PROJECT IN YOUR MACHINE ##

*Before we setup the project, make sure to have already install `node js` and `npm`*

The FaceDetector API is still proposed, which means it is not yet available on browsers natively. To start, 
1. First we need to enable the **Experimental Web Platform features** in [chrome://flags/](chrome://flags)
  - Search for 'Experimental Web Platform features' and enable it. This may require you to restart your browsers.

2. You can now then clone/fork this repository in your machine.

3. Using bash/terminal, 
> run `npm i parcel`
  - It will be installing modules into your machine that we used in our project. 

4. After the installation, open up `**package.json**`, insert this code inside the object: 

  `"scripts": {
    "start": "parcel face.html"
  }`

5. Go back to the terminal and run `npm start`. This will created a local server, that we can see the project running.


