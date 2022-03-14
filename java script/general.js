const headerResBtn = document.querySelector('.responsive-navigation-button');
const headerResContainer = document.querySelector('.header-responsive-navigation-container');
const headerRes = document.querySelector('.header-responsive-navigation');
document.getElementById('close').addEventListener('click', () =>{
    headerRes.style.display = 'none'
})
headerResBtn.addEventListener('click', () => {
    if (headerRes.style.display == 'flex') {
        headerRes.style.display = 'none'
    }
    else{
        headerRes.style.display = 'flex'
   }
})

function openLogin(){
    loginForm.style.display = "flex"
}

const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
login.addEventListener('click', () =>{
    loginForm.style.display = "flex"
    registerForm.style.display = "none"
})
register.addEventListener('click', () =>{
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
