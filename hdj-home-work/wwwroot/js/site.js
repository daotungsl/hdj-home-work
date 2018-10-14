// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByName("Submit")[0].onclick = validate;

    function validate() {
        var name = document.getElementsByName("Name")[0].value;
        var email = document.getElementsByName("Email")[0].value;
        var phone = document.getElementsByName("Phone")[0].value;
        var nameMessage = document.getElementsByName("nameMessage")[0];
        var emailMassage = document.getElementsByName("emailMessage")[0];
        var phoneMassage = document.getElementsByName("phoneMessage")[0];
        var check = true;
        if (name.length === 0) {
            nameMessage.innerHTML = "Invalid name";
            check = false;
        } else {
            nameMessage.innerHTML = "";
        }
        if (email.length === 0) {
            emailMassage.innerHTML = "Invalid email";
            check = false;
        } else {
            emailMassage.innerHTML = "";
        }
        if (phone.length === 0) {
            phoneMassage.innerHTML = "Invalid phone";
            check = false;
        } else {
            phoneMassage.innerHTML = "";
        }
        if (check) {
            alert(name + " - " + email + " - " + phone);
        }
        
    }
       
    
});