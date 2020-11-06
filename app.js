function formValidate() {
    var alertname = document.getElementById("name");
    var alertemail = document.getElementById("email");
    var alertaddress = document.getElementById("address");
    var alertpassword = document.getElementById("pwd");
    var alertcpassword = document.getElementById("cpwd");
    var alertphone = document.getElementById("phone");
    var validate = document.getElementById("checkbtn");
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["phone"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var address = document.forms["RegForm"]["Address"];
    if (name.value == "" && address.value == "" && email.value == "" && password.value == "" && cpassword.value == "" && phone.value == "") {
        alertname.innerText = "Alteast 8 to 15 Charaters Required";
        alertaddress.innerText = "Kindly fill Address field";
        alertemail.innerText = "Kindly fill Email field";
        alertpassword.innerText = "Kindly fill this field";
        alertcpassword.innerText = "Kindly fill this field";
        alertphone.innerText = "Kindly fill this field";
    }
    if (name.value.length < 8) {
        alertname.innerText = "Alteast 8 to 15 Charaters Required";
        name.focus();
        return false;
    } else {
        alertname.innerText = "";
    }


    if (address.value == "") {
        alertaddress.innerText = "Kindly fill Address field";
        address.focus();
        return false;
    } else {
        alertaddress.innerText = "";
    }


    if (email.value == "") {
        alertemail.innerText = "Kindly fill Email field";
        email.focus();
        return false;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        alertemail.innerText = "";
    } else {
        alertemail.innerText = "Enter Valid Email address";
        email.focus();
        return false;
    }


    if (password.value == "") {
        alertpassword.innerText = "Kindly fill this field";
        password.focus();
        return false;
    } else if (password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
        alertpassword.innerText = "";
    } else {
        alertpassword.innerText = "Password must contain 1 uppercase letter,1 lowercase letter,atleast 1 number and symbol";
        password.focus();
        return false;
    }



    if (cpassword.value == "") {
        alertcpassword.innerText = "Kindly fill this field";
        cpassword.focus();
        return false;
    } else if (password.value == (password.value) {
            alertcpassword.innerText = "";
        } else {
            alertcpassword.innerText = "Password and confirm password must be same";
            cpassword.focus();
            return false;
        }



        if (phone.value == "") {
            alertphone.innerText = "Kindly fill this field";
            phone.focus();
            return false;
        } else if (phone.value < 10) {
            alertphone.innerText = "phone number should contain 10 numbers";
            phone.focus();
            return false;
        } else {
            alertphone.innerText = "";

        }

        validate.innerText = "Regex Validation Success"
        checkbtn.focus();
        return true;
    }