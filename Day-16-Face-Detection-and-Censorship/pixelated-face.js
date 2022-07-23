// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.



const webcam = document.querySelector(".webcam");

const videoCanvas = document.querySelector(".video");
const faceCanvas = document.querySelector(".face");

const videoCtx = videoCanvas.getContext("2d");
const faceCtx = faceCanvas.getContext("2d");

const faceDetector = new window.FaceDetector();

const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

const options = {
  MIN_SIZE: 10,
  SCALE: 1.2,
  SIZE: 10
};

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  webcam.srcObject = stream;
  await webcam.play();

  // Size the canvases to be the same size as the video
  videoCanvas.width = webcam.videoWidth;
  videoCanvas.height = webcam.videoHeight;
  faceCanvas.width = webcam.videoWidth;
  faceCanvas.height = webcam.videoHeight;
}


async function detect() {
  const faces = await faceDetector.detect(webcam);

  videoCtx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faces.forEach(drawFace);
  faces.forEach(censor);

  requestAnimationFrame(detect);
}


function drawFace(face) {
  const { left, top, width, height } = face.boundingBox;

  videoCtx.strokeStyle = "#ffc600";
  videoCtx.lineWidth = 2;
  videoCtx.strokeRect(left, top, width, height);
}


function censor({ boundingBox }) {
  faceCtx.imageSmoothingEnabled = false;

  // Draw the small face
  faceCtx.drawImage(
    //? 5 source args
    webcam, //? Where does the source come from?
    boundingBox.x, //? Where do we start the source pull from?
    boundingBox.y,
    boundingBox.width,
    boundingBox.height,

    //? 4 draw args
    boundingBox.x, //? Where do we start drawing from?
    boundingBox.y,
    options.SIZE, //? How big (width/height) shoild we draw it?
    options.SIZE,
  );

  // Scale the small face back to normal size
  const scaledWidth = boundingBox.width * options.SCALE;
  const scaledHeight = boundingBox.height * options.SCALE;

  faceCtx.drawImage(
    //? 5 source args
    faceCanvas,
    boundingBox.x, //? Where do we start the source pull from?
    boundingBox.y,
    options.MIN_SIZE,
    options.MIN_SIZE,
    //? 4 draw args
    boundingBox.x - (scaledWidth - boundingBox.width) / 2, //? Where do we start drawing from?
    boundingBox.y - (scaledHeight - boundingBox.height) / 2,
    scaledWidth, //? How big (width/height) shoild we draw it?
    scaledHeight,
  );
}

function handleOption(event) {
  const { value, name } = event.currentTarget;
  console.log(event.currentTarget.value);
  console.log(name);
  options[name] = parseFloat(value);
}


optionsInputs.forEach(input => input.addEventListener('input', handleOption));


populateVideo().then(detect);