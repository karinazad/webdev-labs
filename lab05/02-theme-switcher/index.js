/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
// const switchStyleOcean = () => {
//     document.querySelector("body").className = "ocean";
// };
// const switchStyleHighContrast = () => {
//     document.querySelector("body").className = "high-contrast";
// };
// const switchStyleDesert = () => {
//     document.querySelector("body").className = "desert";
// };
// const removeStyle = () => {
//     document.querySelector("body").className = "";
// };
//


// document.querySelector('#default').addEventListener('click', removeStyle);
// document.querySelector('#ocean').addEventListener('click', switchStyleOcean);
// document.querySelector('#desert').addEventListener('click', switchStyleDesert);
// document.querySelector('#high-contrast').addEventListener('click', switchStyleHighContrast);
//

const switchStyle = (style) => {
    document.querySelector("body").className = style;
};

document.querySelector('#default').addEventListener("click", function(){ switchStyle(""); });
document.querySelector('#ocean').addEventListener("click", function(){ switchStyle("ocean"); });
document.querySelector('#desert').addEventListener("click", function(){ switchStyle("desert"); });
document.querySelector('#high-contrast').addEventListener("click", function(){ switchStyle("high-contrast"); });


