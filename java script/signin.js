const signIn = document.getElementById("sign-in");
signIn.addEventListener("submit", (event) => {
  event.preventDefault();

  const userLogin = {
    email: signIn.email.value,
    password: signIn.password.value
  }
  console.log(userLogin);

  let usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));
  console.log("usersFromLocalStorage: ", usersFromLocalStorage);


  // kiem tra thong tin dang nhap voi du lieu dang ky
  console.log(usersFromLocalStorage.find(item => item.email == userLogin.email));
  if (usersFromLocalStorage.find(item => item.email == userLogin.email) != undefined) {
    let value = usersFromLocalStorage.find(item => item.email == userLogin.email);
    if (value.password == userLogin.password) {
      alert('login success')
    } else {
      alert("Wrong password")
    }
  }

  signIn.email.value = ""
  signIn.password.value = ""


})

