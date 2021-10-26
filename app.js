/* Fill your code*/
function formValidate() {
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let pwd = document.forms["RegForm"]["Password"];
    let cpwd = document.forms["RegForm"]["cPassword"];
    let phone = document.forms["RegForm"]["phone"];
    let done = document.forms["RegForm"]["Submit"];
    
    let errname = document.getElementById("name");
    let erraddress = document.getElementById("address");
    let erremail = document.getElementById("email");
    let errpwd = document.getElementById("pwd");
    let errcpwd = document.getElementById("cpwd");
    let errphone = document.getElementById("phone");
    let submit = document.getElementById("done");

    if (name.value == "") {
        errname.innerHTML = "Name is Required";
        name.focus();
        return false;
    } else if (name.value.length < 8 || name.value.length > 15) {
        errname.innerHTML = "Atleast 8 to 15 characters is required";
        name.focus();
        return false;
    } else {
        errname.innerHTML = "";
    }

    if (address.value == "") {
        erraddress.innerHTML = "Kindly fill Address field";
        address.focus();
        return false;
    } else {
        erraddress.innerHTML = "";
    }

    if (email.value == "") {
        erremail.innerHTML = "Kindly fill Email field";
        email.focus();
        return false;
    } else if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
        erremail.innerHTML = "";
    } else {
        erremail.innerHTML = "Enter a valid Email";
        email.focus();
        return false;
    }

    if (pwd.value == "") {
        errpwd.innerHTML = "Kindly fill Password field";
        pwd.focus();
        return false;
    } else if (
        /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/.test(pwd.value)
    ) {
        errpwd.innerHTML = "";
    } else {
        errpwd.innerHTML =
            "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any symbols";
        pwd.focus();
        return false;
    }

    if (cpwd.value == "") {
        errcpwd.innerText = "Kindly fill this field";
        cpwd.focus();
        return false;
    } else if (cpwd.value == pwd.value) {
        errcpwd.innerText = "";
    } else {
        errcpwd.innerText = "Password and Confirm Password should be same";
        cpwd.focus();
        return false;
    }

    if (phone.value == "") {
        errphone.innerHTML = "Kindly fill phone number field";
        phone.focus();
        return false;
    } else if (phone.value.length < 10 || phone.value.length > 10) {
        errphone.innerHTML = "Phone number field should contain 10 digits";
        phone.focus();
        return false;
    } else if (phone.value.match(/(?=.*\d[0-9])/)) errphone.innerHTML = "";
    else {
        errphone.innerHTML = "Kindly fill valid phone number";
        phone.focus();
        return false;
    }
   
    submit.innerHTML = "Regex Validation Success";
    done.focus();
    return false;
}