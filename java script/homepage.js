const container = document.getElementById("slide-container");
const img = document.querySelectorAll("#slide-container img");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

var counter = 1;
nextBtn.addEventListener("click", () => {
    if (counter >= img.length -1) return;
    counter++;
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    console.log(counter);
})

prevBtn.addEventListener("click" , () => {
    if (counter <= 0) return;
    counter--; 
    container.style.transform = "translateX(" + (counter * -100) + "%)"
    console.log(counter);
})
