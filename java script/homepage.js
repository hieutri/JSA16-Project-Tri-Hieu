const container = document.getElementById("slide-container");
const img = document.querySelectorAll("#slide-container img");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

var counter = 1;
container.style.transform  = "translateX(-100%)"
nextBtn.addEventListener("click", () => {
    counter++;
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    console.log(counter);
    if(counter > 5){
        counter = 1;
    }
})

prevBtn.addEventListener("click" , () => {
    counter--; 
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    console.log(counter);
    if(counter <= 0){
        counter = 5;
    }
})