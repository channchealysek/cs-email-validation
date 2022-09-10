var form = document.getElementById("form");
var email = document.getElementById("email");
var text = document.getElementById("text");

var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var emailValue = email.value;


email.addEventListener("keydown", function(event) {
    if(email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address in valid."
        text.style.color = "#00ff00"
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#ff0000"
    }

    if (email.value === "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = ""
        text.style.color = "#ff0000"
    }
})