const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");

const container = document.getElementById("slide-container");
const img = document.querySelectorAll("#slide-container img");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let counter = 0;
nextBtn.addEventListener("click", () => {
    counter++;
    console.log(counter);
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    if(counter >= 5){
        let counter = 1; 
    }
})

prevBtn.addEventListener("click" , () => {
    counter--; 
    console.log(counter);
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    if(counter <= -1){
        let counter = 5
    }
})
