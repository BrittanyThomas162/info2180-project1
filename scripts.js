/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form");
    var message = document.querySelector(".message");
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let emailInput = document.querySelector("#email");
        let email = emailInput.value.trim();

        if (email === "" || !emailRegex.test(email)) {
            message.textContent = "Please enter a valid email address."
        } else {
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    })

});

   
