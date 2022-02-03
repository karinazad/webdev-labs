const makeBigger = (ev) => {
   // const elementClicked = ev.currentTarget;
   // console.log(ev);
   // elementClicked.style.fontSize = "50px";
   // elementClicked.style.fontSize = "50px";

   document.querySelector(".content").style.fontSize = "50px"
   document.querySelector("h1").style.fontSize = "50px"
};

const makeSmaller = (ev) => {
   // alert('make smaller!');
   // const elementClicked = ev.currentTarget;
   // console.log(ev);
   // elementClicked.style.fontSize = "5px";
   // elementClicked.style.fontSize = "5px";

   document.querySelector(".content").style.fontSize = "14px"
   document.querySelector("h1").style.fontSize = "14px"

};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

