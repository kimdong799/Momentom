const title = document.querySelector('.js-title');

const CLICKED_CLASS = "clicked";

function handleClick(){
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   // TRUE, FALSE 값 반환
//   if (hasClass) { // !반대를 의미
//     title.classList.remove(CLICKED_CLASS);
//   }else{
//     title.classList.add(CLICKED_CLASS);
//   }
//   console.log("className is ",hasClass);
// }
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("mouseover", handleClick);
  title.addEventListener("mouseout", handleClick);
}
init();
