/*////////////////////////////////These are the variables////////////////////////////////////////// */
window.addEventListener("load", listen);

var images = new Array(
  'images/IMG_0725.JPG',
  'images/IMG_0726.JPG',
  'images/IMG_0727.JPG',
  'images/IMG_0728.JPG',
  'images/IMG_0729.JPG',
  'images/IMG_0730.JPG',
  'images/IMG_0733.JPG',
  'images/IMG_0734.JPG',
  'images/IMG_0735.JPG',
);


// var timer
var index = 0

/* ////////////////////////////////////////Event listeners////////////////////////////////////// */
function listen(){
   document.getElementById('next').addEventListener("click", changePhoto);
   document.getElementById('prev').addEventListener("click", previous);
   document.getElementById('random').addEventListener("click", randomPicture)

}


document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 32:
          randomPicture() // space button
     case 37:
          previous() // left arrow key
        break;
     case 38:
          changePhoto(); // up arrow key
        break;
     case 39:
          changePhoto() //right arrow key
        break;
     case 40:
          previous() //down arrow key
        break;
  }
}


/* ///////////////////////////////Functions for event listeners///////////////////////////////// */

function randomPicture(){
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const randomPic = images[Math.floor(Math.random() * images.length)];
      document.getElementById("photo").src = randomPic
    }, 50 * i);  
  }
}

function changePhoto() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  document.getElementById("photo").src = images[index];
}


function previous() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  document.getElementById("photo").src = images[index];
}

