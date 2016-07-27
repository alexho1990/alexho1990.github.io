window.onload = window.setTimeout(firstImage, 500);

var carousel = document.getElementById("carousel-img")

function firstImage() {
  carousel.setAttribute("src", "./assets/images/first.png");
  setTimeout(secondImage, 5000);
};

function secondImage() {
  carousel.setAttribute("src", "./assets/images/second.png");
  setTimeout(thirdImage, 5000);
};

function thirdImage () {
  carousel.setAttribute("src", "./assets/images/third.png");
  setTimeout(fourthImage, 5000);
};

function fourthImage () {
  carousel.setAttribute("src", "./assets/images/fourth.png");
  setTimeout(firstImage, 5000);
};
  

  "url('assets/images/first.png') no-repeat center center";