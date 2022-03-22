document.getElementById("brand").addEventListener("click", () => {
   const brandDropdown = document.querySelector(".brand-content");
   if (brandDropdown.style.display === "block") {
      brandDropdown.style.display = "none";
      document.querySelector("#brand i").classList = "fa fa-angle-right";
   } else {
      brandDropdown.style.display = "block";
      document.querySelector("#brand i").classList = "fa fa-angle-down";
   }
});
document.getElementById("akko-selection").addEventListener("click", () => {
   const brandDropdown = document.querySelector(".akko-content");
   if (brandDropdown.style.display === "block") {
      brandDropdown.style.display = "none";
      document.querySelector("#akko-selection i").classList = "fa fa-angle-right";
   } else {
      brandDropdown.style.display = "block";
      document.querySelector("#akko-selection i").classList = "fa fa-angle-down";
   }
});
document.getElementById("razer-selection").addEventListener("click", () => {
   const brandDropdown = document.querySelector(".razer-content");
   if (brandDropdown.style.display === "block") {
      brandDropdown.style.display = "none";
      document.querySelector("#razer-selection i").classList =
         "fa fa-angle-right";
   } else {
      brandDropdown.style.display = "block";
      document.querySelector("#razer-selection i").classList = "fa fa-angle-down";
   }
});
document.getElementById("corsair-selection").addEventListener("click", () => {
   const brandDropdown = document.querySelector(".corsair-content");
   if (brandDropdown.style.display === "block") {
      brandDropdown.style.display = "none";
      document.querySelector("#corsair-selection i").classList =
         "fa fa-angle-right";
   } else {
      brandDropdown.style.display = "block";
      document.querySelector("#corsair-selection i").classList =
         "fa fa-angle-down";
   }
});



