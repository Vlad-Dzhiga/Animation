function start() {
  window.setInterval("timer()", 1000);
}


var images = new Array();
var image = new Image();
image.src = 'Funny.jpg';
image.src = 'Sad.jpg';
image.src = 'Angry.png';
Array.push(image);
var i = 0;

function timer() {
  document.getElementById("img_mein").src = images[i];
  i++;
  if (i == images.length) {
    i = 0;
  }
  setTimeout("timer()", 2000);
};

function stop() {
  window.clearInterval(timer);
}