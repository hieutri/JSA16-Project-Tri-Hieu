let users = [];

// Nen co dong nay.
if (localStorage.getItem("users") == null) {
  localStorage.setItem("users", JSON.stringify(users))
}


// LocalStorage: luu tru duoi dang String (chuoi)
// if(localStorage.getItem("users"));


const signUp = document.getElementById("sign-up");
signUp.addEventListener("submit", (event) => {
  event.preventDefault();
  // dung de chan su kien reload mac dinh cua trinh duyet
  const data = {
    email: signUp.email.value,
    password: signUp.password.value
  }
  console.log(data);
  // LAY DL tren localStorage ve
  let getUsersOnLocalStorage = JSON.parse(localStorage.getItem("users"));
  getUsersOnLocalStorage.push(data);
  localStorage.setItem('users', JSON.stringify(getUsersOnLocalStorage))

  signUp.email.value = ""
  signUp.password.value = ""


  // windows.location.href = '../signIn.html'
  window.location = "http://127.0.0.1:5500/HDT-JSA16/SS10/signIn.html";
})