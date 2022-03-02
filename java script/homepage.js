const slider = document.querySelector(".slide-container");
const img = document.querySelectorAll(".slide-container img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

var counter = 1;
slider.style.transform = 'translateX(-100%)';
nextBtn.addEventListener("click", () => {
    counter ++;
    slider.style.transform = 'translateX(' + (counter * -100) + '%)';
    if(img[counter].id === 'firstClone'){
        counter = img.length - counter;
        slider.style.transform = 'translateX(' + (counter * -100) + '%)';
    }
})
prevBtn.addEventListener("click", () => {
    counter --;
    slider.style.transform = 'translateX(' + (counter * -100) + '%)';
    if(img[counter].id === 'lastClone'){
        counter = img.length -2;
        slider.style.transform = 'translateX(' + (counter * -100) + '%)';
    }
})