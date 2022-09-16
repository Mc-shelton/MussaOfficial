if(window.innerWidth < 922){
let newsCol = [...document.getElementsByClassName("newsCol")];
let newsRoll = [...document.getElementsByClassName("newsRoll")];

newsCol = newsCol.concat(newsRoll);
let a = 1;
newsCol[0].style.display = 'block'
setInterval(() => {
  newsCol.forEach((element) => {
    element.style.display = "none";
  });
  newsCol[a].style.display = "block";
  {
    a == newsCol.length-1 ? (a = 0) : a++;
  }
}, 7000);
}