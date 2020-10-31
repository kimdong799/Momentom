const title = document.querySelector("#title");

const BASE_COLOR = "rgb(149, 175, 192)";
const OTHER_COLOR = "rgb(52, 73, 94)";

// 폰트 컬러가 클릭할 때마다 바뀌는 로직
function handleClick(){
  console.log(title.style.color);

  const CURRENT_COLOR = title.style.color; // 현재  style 체크하는 변수

  if (CURRENT_COLOR === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
  title.addEventListener("mouseout", handleClick);
  // mouseenter 마우스가 들어갈 때마다
  // mouseout 마우스가 나올 때마다
  // click 클릭
  // MDN을 찾아보면 많은 이벤트가 정리되어있다.
}
init();

// 네트워크 상태 감지 event

function handleOffLine(){
  console.log("your network is not working");
}
function hadleOnLine(){
  console.log("your network is on working");
}

window.addEventListener("offline", handleOffLine);
window.addEventListener("online", handleOnLine);
