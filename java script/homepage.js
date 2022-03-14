const slider = document.querySelector(".slide-container");
const img = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

var counter = 1;
slider.style.transform = 'translateX(-100vw)';
nextBtn.addEventListener("click", () => {
    counter ++;
    slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    if(img[counter].id === 'firstClone'){
        counter = img.length - counter;
        slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    }
})
prevBtn.addEventListener("click", () => {
    counter --;
    slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    if(img[counter].id === 'lastClone'){
        counter = img.length -2;
        slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    }
})

const cartContainer = document.querySelector(".cart-container")
document.getElementById("cart").addEventListener('click', () =>{
    if (cartContainer.style.display == 'inline-block') {
        cartContainer.style.display = 'none'
    }
    else{
        cartContainer.style.display = 'inline-block'
   }
})

const cart = document.querySelector(".cart-product-info")

