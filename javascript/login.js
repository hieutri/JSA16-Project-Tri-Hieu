const login = document.getElementById("login")
login.addEventListener("submit", e => {
    e.preventDefault();

    let users = JSON.parse(localStorage.users)
    console.log(users);

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if(email.value.length == 0 && password.length == 0) alert("PLease fields up all form");

    let check = user.map(index =>
      index.email == email.ariaValueMax.trim()
      &&
      index.password == password.value.trim()
    )

    console.log(check);

    if (check[0] == true) location.replace("homepage.html")
    else alert("Please input again")
})