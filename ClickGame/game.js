const mako = document.querySelector('#mako');
var imagesArray = ["picture/mako.png", "picture/mako1.png", "picture/mako2.png", "picture/mako3.png"];
//Add click event
mako.addEventListener('click', () => {
  changePicture();
  increaseScore();
  moveMako();
});

//Increase score by 1
const increaseScore = () => {
  const score = document.querySelector("#score-counter").innerHTML;
  const scoreHTML = document.querySelector("#score-counter");
  let count = Number(score);
  scoreHTML.innerHTML = count + 1;
};


const moveMako = () => {
  mako.style.top = `${Math.floor(Math.random() * 50)}%`;
  mako.style.left = `${Math.floor(Math.random() * 70)}%`;
}

function changePicture() {
  var pic = Math.floor(Math.random() * 4)
  mako.src = imagesArray[pic];
  // var op = 0.1
  // mako.style.opacity = op;
  // var timer = setInterval(function() {
  //   if (op >= 1) {
  //     clearInterval(timer);
  //   }
  //   mako.style.opacity = op;
  //   mako.style.filter = 'alpha(opacity=' + op * 100 + ")"; // IE 5+ Support
  //   op += op * 0.1;
  // }, 50);
}

