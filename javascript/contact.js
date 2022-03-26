let contactForm = document.querySelector(".contact-form")
contactForm.addEventListener('submit', ()=>{

    let email = document.getElementById("contact-email")
    let name = document.getElementById("contact-name")
    let orderId = document.getElementById("contact-order-id")
    let message= document.getElementById("contact-message")

    if(email.value.length == 0 && name.value.length == 0 && orderId.value.length == 0 && message.value.length == 0) alert("please fill in all fields") ;
    else alert("your message has been sent successfully");
})