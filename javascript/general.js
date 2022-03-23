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
const cartContainer = document.querySelector(".cart-container")
const cartContent = document.querySelector('.cart-content');
document.getElementById("cart").addEventListener('click', () =>{
    if (cartContainer.style.display == 'flex') {
        cartContainer.style.display = 'none'
    }
    else{
        cartContainer.style.display = 'flex'
   }
})
document.getElementById("cart-closer").addEventListener('click' , ()=>{
    cartContainer.style.display = "none"
})
/*cart end*/


fetch("/json/product-data.json")
    .then((respone) => respone.json())
    .then((data) => {
        const productContainer = document.querySelector(".product-container");

        
        for (let i = 0; i < data.products.length; i++) {
            let productsPrice = data.products[i].price
            console.log(productsPrice);
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
        const numberOfProduct = document.getElementById("number-of-product");
        var counter = 0;
        if (counter == 1) cartInfo.innerHTML = "Your Cart Is Empty";
        else cartInfo.innerHTML = " "
        for (let i = 0; i < data.products.length; i++) {
            let productCounter = 0;
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
                console.log(counter);
                if(counter == 0) numberOfProduct.innerHTML = ""
                if (counter > 1) {
                    console.log("counter > 1");
                    cartInfo.innerHTML = " "
                    console.log(cartInfo.innerHTML);
                    console.log(cartInfo);
                }
                productCounter++;
                event.preventDefault();
                sessionStorage.setItem(`${cartProductName}`, JSON.stringify(productInfo));
                let product = JSON.parse(sessionStorage.getItem(`${cartProductName}`));
                if (productCounter > 1) {
                    alert("This Product Has Already Been Added To Your Cart!")
                }
                else {
                    counter++;
                    numberOfProduct.innerHTML = counter;
                    cartProductContainer.innerHTML += `
                <div class="cart-product">
                <div class="cart-product-img"><img src="${product.productImg}"></div>
                <div class="cart-product-name">${product.productName} (${product.productSwitch} Switch)</div>
                <div class="cart-product-price">${product.productPrice}$</div>
                <button class = "cart-remove-btn">Remove</button>
                </div>
                `;
                }
                let removeProductBtn = document.getElementsByClassName("cart-remove-btn")
                for (let i = 0; i < removeProductBtn.length; i++) {
                    let btn = removeProductBtn[i]
                    btn.addEventListener("click", (event) => {
                        counter--;
                        console.log(counter);
                        productCounter--;
                        numberOfProduct.innerHTML = counter;
                        let btnClicked = event.target;
                        btnClicked.parentElement.remove()
                    });
                }
            })
        }
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
