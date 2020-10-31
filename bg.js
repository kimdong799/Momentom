const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}
//math.floor() 사용으로 배경화면 랜덤 출력 버림
// 비슷하게 math.ceil이란게 있음 올림
function getRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
