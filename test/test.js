let prev = document.getElementById("prev");
let next = document.getElementById("next");

let counter = 1;
if(counter <= -1){
    let counter = 4;
}
prev.addEventListener("click", () => {
    counter--;
    console.log(counter);
})
next.addEventListener("click", () => {
    counter++;
    console.log(counter);
})