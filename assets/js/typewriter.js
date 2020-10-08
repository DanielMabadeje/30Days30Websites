var i = 0;
var txt = '30 days of creating 30 amazing websites and webpages....'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}

typeWriter();