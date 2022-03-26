const headerResBtn = document.querySelector('.responsive-navigation-button');
const headerResContainer = document.querySelector('.header-responsive-navigation-container');
const headerRes = document.querySelector('.header-responsive-navigation');
document.getElementById('close').addEventListener('click', () => {
    headerRes.style.display = 'none'
})
headerResBtn.addEventListener('click', () => {
    if (headerRes.style.display == 'flex') {
        headerRes.style.display = 'none'
    }
    else {
        headerRes.style.display = 'flex'
    }
})

/*cart start*/
const opacityBackground = document.querySelector(".opacity-background-container")
document.getElementById("cart").addEventListener('click', () =>{
    if (opacityBackground.style.display == 'flex') {
        opacityBackground.style.display = 'none'
    }
    else{
        opacityBackground.style.display = 'flex'
   }
})
function openCart(){
        opacityBackground.style.display = 'flex'
}
document.querySelector(".opacity-background").addEventListener("click", ()=>{
    opacityBackground.style.display = "none"
})
document.getElementById("cart-closer").addEventListener('click' , ()=>{
    opacityBackground.style.display = "none"
})
/*cart end*/


fetch("/json/product-data.json")
    .then((respone) => respone.json())
    .then((data) => {
        const productContainer = document.querySelector(".product-container");

        
        for (let i = 0; i < data.products.length; i++) {
            let productsPrice = data.products[i].price
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
        let addProductBtn = document.querySelectorAll(".add-to-cart");
        const cartInfo = document.querySelector(".cart-info");
        var counter = 0;
        var cartProductCounter = 0;
        var totalPrice = 0;
        for (let i = 0; i < data.products.length; i++) {
            let productQuantity = document.getElementById("product-quantity")
            let productCounter = 1;
            let cartProductImg = data.products[i].img;
            let cartProductName = data.products[i].name;
            let cartProductSwitch = data.products[i].switch;
            let cartProductPrice = data.products[i].price
            let productInfo = {
                productImg: `${cartProductImg}`,
                productPrice: `${cartProductPrice}`,
                productName: `${cartProductName}`,
                productSwitch: `${cartProductSwitch}`,
            }
            
            addProductBtn[i].addEventListener("click", (event) => {
                cartProductCounter++;                
                event.preventDefault();
                sessionStorage.setItem(`${cartProductName}`, JSON.stringify(productInfo));
                let product = JSON.parse(sessionStorage.getItem(`${cartProductName}`));
                if (productCounter > 1) {
                    alert("this product has already been added to your cart")
                    console.log(productCounter);
                }
                else {
                    productCounter++;
                    cartProductContainer.innerHTML += `
                <div class="cart-product">
                <div class="cart-product-left">
                <div class="cart-product-img"><img src="${product.productImg}"></div>
                </div>
                <div class="cart-product-right">
                <div class="cart-product-top">
                <div class="cart-product-name">${product.productName} (${product.productSwitch} Switch)</div>
                </div>
                <div class="cart-product-bottom">
                <div class="cart-product-price">${product.productPrice}</div>
                <div class="product-quantity-container">
                <input type="number" id="product-quantity"/>
                </div>
                <button class="cart-remove-btn">Remove</button>
                </div>
                </div>
                </div>
                `;
                openCart()
                }
                let removeProductBtn = document.getElementsByClassName("cart-remove-btn")
                for (let x = 0; x < removeProductBtn.length; x++) {
                    let btn = removeProductBtn[x]
                    btn.addEventListener("click", (event) => {
                        cartProductCounter--;
                        console.log(productCounter);
                        let btnClicked = event.target;
                        btnClicked.parentElement.parentElement.parentElement.remove()
                    });
                }
                
               
            })
            
        }
         //anh thử add 2 sản phẩm khác giá nhau và remove đi, tổng số tiền nó sẽ khác 0
        //cart end
    });
const searchInput = document.getElementById("search-bar");
document.getElementById("search-sumbit").addEventListener("click", (e) => {
    search();
});

/*search start*/

searchInput.addEventListener("keypress", (enter) => {
    if (enter.key === "Enter") {
        search()
    };
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

/*search end*/
