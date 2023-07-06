// dropdown
let dropDownElement1 = document.getElementById("drop-down1");
let dropElement1 = document.getElementById("drop1");

dropDownElement1.addEventListener("mouseover", mouseOver);
dropDownElement1.addEventListener("mouseout", mouseOut);

function mouseOver() {
    dropElement1.style.visibility = "visible";
}

function mouseOut() {
    dropElement1.style.visibility = "hidden";
}

// deep dropdown
let dropDownElement2 = document.getElementById("drop-down2");
let dropElement2 = document.getElementById("drop2");

dropDownElement2.addEventListener("mouseover", mouseOver2);
dropDownElement2.addEventListener("mouseout", mouseOut2);

function mouseOver2() {
    dropElement2.style.visibility = "visible";
}

function mouseOut2() {
    dropElement2.style.visibility = "hidden";
}

// slider

function changeContent() {
    const images = document.getElementsByClassName('images');
    const numbers=[3,4,5,6,7,8];
    const delay = 500;

    numbers.forEach((num, index) => {
        setTimeout(() => {
            images[index].innerHTML = "<img src='images/client-" + num + ".png' alt=''>";
          }, delay);
        });
}

function reverseContent() {
    const images = document.getElementsByClassName('images');
    const numbers=[1,2,3,4,5,6];
    const delay = 500;
    numbers.forEach((num, index) => {
        setTimeout(() => {
            images[index].innerHTML = "<img src='images/client-"+(num)+".png' alt=''>";
        },delay);
    });
}
