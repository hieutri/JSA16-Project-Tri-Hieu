// const login = document.getElementById("login")
// login.addEventListener("submit", e => {
//     e.preventDefault();

//     let email = document.getElementById("email")
//     let password = document.getElementById("password")

//     if (email.value.length == 0 && password.value.length == 0) document.alert("PLease fields up all fields");
//     else location.replace("homepage.html");
// })
document.getElementById("sumbit").addEventListener("click", ()=>{
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  if (email.value.length == 0 && password.value.length == 0) alert("PLease fields up all fields");
  else location.replace("homepage.html");
})