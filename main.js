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

var timer
var index = 0

/* ////////////////////////////////////////Event listeners////////////////////////////////////// */
function listen(){
  document.getElementById('next').addEventListener("click", changePhoto);
  document.getElementById('prev').addEventListener("click", previous);
}

/* ///////////////////////////////Functions for event listeners///////////////////////////////// */

function changePhoto() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  // document.getElementById("photo").innerHTML.src = images[index]
  document.getElementById("photo").src = images[index];

}

function previous() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }

  // document.getElementById("photo").innerHTML.src = images[index]
  document.getElementById("photo").src = images[index];


}


