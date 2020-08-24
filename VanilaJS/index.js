// const title= document.getElementById("title");
// title.innerHTML="hi FromJS"

// title.style.color="red";
// console.log(title);
// console.dir(title);
// console.dir(document);

const title = document.querySelector("#title");
// title.innerHTML="hi FromJS"
// title.style.color="red";
// document.title = "I own you now";

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;

    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
   // title.addEventListener("click",handleClick);
   title.addEventListener("mouseenter",handleClick);
}

init();

function handleOffline(){
    console.log("lalala");
}

function handleOnline(){
    console.log("Welcome back");
}

// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);



window.addEventListener("offline" , handleOffline);
window.addEventListener("online" , handleOnline);

