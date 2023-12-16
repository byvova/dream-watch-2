const refs = {
  headerA: document.querySelectorAll('.text-white-js'),
  cardBtn: document.querySelectorAll('#card-btn'),
  leftBtn:  document.querySelectorAll('#left'),
  rightBtn: document.querySelectorAll('#right')
};

console.log(refs);


Array.from(refs.headerA).forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    element.style.color = "white";
  });

  element.addEventListener("mouseout", (event) => {
    element.style.color = ""; 
  });
});

Array.from(refs.cardBtn).forEach((element) => {
  element.addEventListener("click", (event) => {
    element.style.background = "#5653FF";
    setTimeout(() => {
      element.style.backgroundColor = "";
    }, 500);
  });
});
