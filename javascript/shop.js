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


const searchInput = document.getElementById("search-bar");
document.getElementById("search-sumbit").addEventListener("click", () => {
   search();
});

searchInput.addEventListener("keypress", (enter) => {
   if (enter.key === "Enter") search();
});

function search() {
   var filter = searchInput.value.toLowerCase();
   filterSelection(filter);
}
function filterSelection(c) {
   var x, i;
   x = document.getElementsByClassName("product-content");
   if (c == "all") c = "";
   for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
   }
}

function AddClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
         element.className += " " + arr2[i];
      }
   }
}

function RemoveClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
   }
   element.className = arr1.join(" ");
}

//cart start
const cartContainer = document.querySelector(".cart-container");
document.getElementById("cart").addEventListener("click", () => {
   if (cartContainer.style.display == "inline-block") {
      cartContainer.style.display = "none";
   } else {
      cartContainer.style.display = "inline-block";
   }
});
//cart end
