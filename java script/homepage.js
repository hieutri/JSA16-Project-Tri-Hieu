const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let x = 0;
let i;

function next(){
    pic1.style.marginLeft = "-100%";
    i = x + 1
    console.log(i);
}
function prev(){
    pic1.style.marginLeft = "0%";
}
nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", prev)


