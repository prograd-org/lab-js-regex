
function formValidate() {
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let pwd = document.forms["RegForm"]["Password"];
    let cpwd = document.forms["RegForm"]["cPassword"];
    let phone = document.forms["RegForm"]["phone"];
    let done = document.forms["RegForm"]["Submit"];
    
    let errorname = document.getElementById("name");
    let erroraddress = document.getElementById("address");
    let erroremail = document.getElementById("email");
    let errorpwd = document.getElementById("pwd");
    let errorcpwd = document.getElementById("cpwd");
    let errorphone = document.getElementById("phone");
    let submit = document.getElementById("done");

    if (name.value == "") {
        errorname.innerHTML = "Please fill name";
        name.focus();
        return false;
    } else if (name.value.length < 8 || name.value.length > 15) {
        errorname.innerHTML = "Atleast 8 to 15 characters is required";
        name.focus();
        return false;
    } else {
        errorname.innerHTML = "";
    }

    if (address.value == "") {
        erroraddress.innerHTML = "Kindly fill the Address field";
        address.focus();
        return false;
    } else {
        erroraddress.innerHTML = "";
    }

    if (email.value == "") {
        erroremail.innerHTML = "Kindly fill Email field";
        email.focus();
        return false;
    } else if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
        erroremail.innerHTML = "";
    } else {
        erroremail.innerHTML = "Enter a valid Email";
        email.focus();
        return false;
    }

    if (pwd.value == "") {
        errorpwd.innerHTML = "Kindly fill Password field";
        pwd.focus();
        return false;
    } else if (
        /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/.test(pwd.value)
    ) {
        errorpwd.innerHTML = "";
    } else {
        errorpwd.innerHTML =
            "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any symbols";
        pwd.focus();
        return false;
    }

    if (cpwd.value == "") {
        errorcpwd.innerText = "Kindly fill this field";
        cpwd.focus();
        return false;
    } else if (cpwd.value == pwd.value) {
        errorcpwd.innerText = "";
    } else {
        errorcpwd.innerText = "Password and Confirm Password should be same";
        cpwd.focus();
        return false;
    }

    if (phone.value == "") {
        errorphone.innerHTML = "Kindly fill phone number field";
        phone.focus();
        return false;
    } else if (phone.value.length < 10 || phone.value.length > 10) {
        errorphone.innerHTML = "Phone number field should contain 10 digits";
        phone.focus();
        return false;
    } else if (phone.value.match(/(?=.*\d[0-9])/)) 
         errorphone.innerHTML = "";
    else {
        errorphone.innerHTML = "Kindly fill valid phone number";
        phone.focus();
        return false;
    }
   
    submit.innerHTML = "Regex Validation Success";
    done.focus();
    return false;
}