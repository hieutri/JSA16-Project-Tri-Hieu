let prev = document.getElementById("prev");
let next = document.getElementById("next");

let counter = 1;
prev.addEventListener("click", () => {
    counter--;
    console.log(counter);
})
next.addEventListener("click", () => {
    counter++;
    console.log(counter);
})
if(counter <= -1){
    let counter = 4;
}
else if(counter >= 5){
    let counter = 0;
}