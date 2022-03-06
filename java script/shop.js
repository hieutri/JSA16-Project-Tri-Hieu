document.getElementById("product-line").addEventListener("click", () =>{
   const dropdown = document.querySelector(".category-dropdown-container");
   if(dropdown.style.display === "block"){
       dropdown.style.display = "none"
    }
    else{
       dropdown.style.display = "block"
   }
})