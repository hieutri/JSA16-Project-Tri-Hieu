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

fetch("/json/product-data.json")
   .then((respone) => respone.json())
   .then((data) => {
      const productContainer = document.querySelector(".product-container");

      for (let i = 0; i < data.products.length; i++) {
         if (data.products[i].discount == true) {
            productContainer.innerHTML += `
         <div class="product-content ${data.products[i].class}">
         <div class="product-img">
            <img src="${data.products[i].img}">
         </div>
         <div class="product-info">
         <div class="product-name">${data.products[i].name} (${data.products[i].switch} switch)</div>
         <div class="product-price--add-to-cart">
         <div class="product-price">${data.products[i].price}$  <p class="product-discount">-${data.products[i].discountPercent}%</p></div>
         <span class="add-to-cart">Add to cart</span>
         </div>
            </div>           
         </div>
         `;
         } else {
            productContainer.innerHTML += `
         <div class="product-content ${data.products[i].class}">
         <div class="product-img">
            <img src="${data.products[i].img}">
         </div>
         <div class="product-info">
         <div class="product-name">${data.products[i].name} (${data.products[i].switch} switch)</div>
         <div class="product-price--add-to-cart">
         <div class="product-price">${data.products[i].price}$</div>
         <span class="add-to-cart">Add to cart</span>
         </div>
            </div>           
         </div>
         `;
         }
      }
      filterSelection("all");
      //cart start
      const cartProductContainer = document.querySelector(".cart-product-container");

      console.log(cartProductContainer);
      let addProductBtn = document.querySelectorAll(".add-to-cart");
      for (let i = 0; i < data.products.length; i++) {
         addProductBtn[i].addEventListener("click", () => {
            cartProductContainer.innerHTML += `
            <div class="cart-product">
            <div class="cart-product-img"><img src="${data.products[i].img}"></div>
            <div class="cart-product-name">${data.products[i].name} (${data.products[i].switch} Switch)</div>
            <div class="cart-product-price">${data.products[i].price}</div>
            <button class = "cart-remove-btn">Remove</button>
            </div>
            `;
            let removeProductBtn = document.getElementsByClassName("cart-remove-btn")
            for (let i = 0; i < removeProductBtn.length; i++) {
               let btn = removeProductBtn[i]
               btn.addEventListener("click", (event)=>{
                  let btnClicked = event.target;
                  btnClicked.parentElement.remove()
               });
            }
         })
      }
      //cart end
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
