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

function openLogin() {
    loginForm.style.display = "flex"
}

const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
login.addEventListener('click', () => {
    loginForm.style.display = "flex"
    registerForm.style.display = "none"
})
register.addEventListener('click', () => {
    loginForm.style.display = "none"
    registerForm.style.display = "flex"
})
window.onclick = (event) => {
    if (event.target == headerRes) {
        headerRes.style.display = 'none';
    }
    if (event.target == loginForm) {
        loginForm.style.display = 'none';
    }
    if (event.target == registerForm) {
        registerForm.style.display = 'none';
    }

}
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
        let addProductBtn = document.querySelectorAll(".add-to-cart");
        const cartInfo = document.querySelector(".cart-info")
        var counter = 1;
        if(counter == 1) cartInfo.innerHTML = "Your Cart Is Empty";
        else cartInfo.innerHTML = " "
        for (let i = 0; i < data.products.length; i++) {
            let productCounter = 0;
            let cartProductImg = data.products[i].img;
            let cartProductName =  data.products[i].name;
            let cartProductSwitch =  data.products[i].switch;
            let cartProductPrice = data.products[i].price
            let productInfo = {
                productImg: `${cartProductImg}`,
                productPrice: `${cartProductPrice}`,
                productName: `${cartProductName}`,
                productSwitch: `${cartProductSwitch}`,
            }
            addProductBtn[i].addEventListener("click", (event) => {
                console.log(counter);
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
                else{
                    counter ++;
                    cartProductContainer.innerHTML += `
                <div class="cart-product">
                <div class="cart-product-img"><img src="${product.productImg}"></div>
                <div class="cart-product-name">${product.productName} (${product.productSwitch} Switch)</div>
                <div class="cart-product-price">${product.productPrice}$</div>
                <button class = "cart-remove-btn">Remove</button>
                </div>
                `;
                alert("Succesfully Added A Product")
                }
                let removeProductBtn = document.getElementsByClassName("cart-remove-btn")
                for (let i = 0; i < removeProductBtn.length; i++) {
                    let btn = removeProductBtn[i]
                    btn.addEventListener("click", (event) => {
                        counter --;
                        console.log(counter);
                        productCounter--;
                        console.log(productCounter);
                        let btnClicked = event.target;
                        btnClicked.parentElement.remove()
                    });
                }
            })
        }
        //cart end
    });