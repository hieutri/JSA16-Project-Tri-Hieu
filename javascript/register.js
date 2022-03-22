const register = document.getElementById("register")
register.addEventListener("submit", e =>{
    e.preventDefault()

    let email = document.getElementById("email")
    console.log("dz");
    let password = document.getElementById("password")

    if(email.value.length == 0 && password.length == 0) alert("PLease fields up all form");
    else {
        if (localStorage.users) {
          let users = JSON.parse(localStorage.users)
          users.push({
            email: email.value.trim(),
            password: password.value.trim()
          })
          localStorage.setItem("users", JSON.stringify(users));
        }
        else {
          localStorage.setItem("users",
            JSON.stringify(
              [
                {
                  email: email.value.trim(),
                  password: password.value.trim()
                }
              ]));
        }
        location.replace("login.html")
      }
})