/* Fill your code*/
// Submitted by Prathamesh
// Prograd ID: 8783
function formValidate() {
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let pass = document.forms["RegForm"]["Password"];
    let cpass = document.forms["RegForm"]["cPassword"];
    let phno = document.forms["RegForm"]["phone"];

    let errname = _("name");
    let erraddress = _("address");
    let erremail = _("email");
    let errpass = _("pwd");
    let errcpass = _("cpwd");
    let errph = _("phone");

    let flag1,flag2,flag3,flag4,flag5,flag6;

    // FOR NAME FIELD
    if (name.value === "") {
        errname.textContent = "Kindly fill Name field";
        flag1 = false;
    } else if (!name.value.match(/^[\w ]{8,15}$/)) {
        errname.textContent = "Atleast 8 to 15 Characters Required!";
        flag1 = false;
    } else {
        errname.textContent = "";
        flag1 = true;
    }

    // FOR ADDRESS FIELD
    if (address.value === "") {
        erraddress.textContent = "Kindly fill the address field";
        flag2 = false;
    } else {
        erraddress.textContent = "";
        flag2 = true;
    }

    // FOR EMAIL FIELD
    if (email.value === "") {
        erremail.textContent = "Kindly fill email field";
        flag3 = false;
    } else if (email.value.match(/[@._]/)) {
        erremail.textContent = "";
        flag3 = true;
    } else {
        erremail.textContent = "Email is Invalid";
        flag3 = false;
    }

    // FOR PASSWORD FIELD
    if (pass.value === "") {
        errpass.textContent = "kindly fill Password field";
        flag4 = false;
    } else if (
        pass.value.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
        )
    ) {
        errpass.textContent = "";
        flag4 = true;
    } else {
        errpass.textContent =
            "Password must be atleast 8 characters long,should contain 1 uppercase, 1 lowercase,1 number and symbol.";
        flag4 = false;
    }


    // FOR CONFIRM PASSWORD FIELD
    if (cpass.value === "") {
        errcpass.textContent = "kindly fill Confirm Password field";
        flag5 = false;
    } else if (
        !cpass.value.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
        )
    ) {
        errcpass.textContent =
            "Password must be atleast 8 characters long,should contain 1 uppercase, 1 lowercase,1 number and symbol.";
        flag5 = false;
    } else if (pass.value !== cpass.value) {
        errcpass.textContent = "Passwords don't match";
        flag5 = false;
    } else {
        errcpass.textContent = "";
        flag5 = true;
    }

    // FOR PHONE NUMBER FIELD
    if (phno.value === "") {
        errph.textContent = "kindly fill phone field";
        flag6 = false;
    } else if (!phno.value.match(/^[0-9]{10}$/)) {
        errph.textContent = "phone number should contain only 10 numbers";
        flag6 = false;
    } else {
        errph.textContent = "";
        flag6 = true;
    }

    if (flag1 && flag2 && flag3 && flag4 && flag5 && flag6) {
        let res = document.createElement("p");
        res.textContent = "Regex Validation Success";
        res.style.color = "green";
        document.getElementsByTagName("p")[6].appendChild(res);
    }
}

function _(id) {
    return document.getElementById(id);
}

function addChanges() {
    document.getElementsByTagName("form")[0].removeAttribute("onsubmit");
    document.getElementsByTagName("form")[0].removeAttribute("action");
    document.getElementsByName("Submit")[0].type = "button";
    document
        .getElementsByName("Submit")[0]
        .setAttribute("onclick", "formValidate()");
}

window.onload = () => {
    addChanges();
};