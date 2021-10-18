/* Fill your code*/

const pattern = {
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone:/^\d{10}$/,
}

function formValidate(){
    // values
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let password = document.forms["RegForm"]["Password"];
    let cpassword = document.forms["RegForm"]["cPassword"];
    let phone = document.forms["RegForm"]["phone"];
    // error display
    let errname = document.getElementById("name");
    let erraddress = document.getElementById("address");
    let erremail = document.getElementById("email");
    let errpassword = document.getElementById("pwd");
    let errcpassword = document.getElementById("cpwd");
    let errphone = document.getElementById("phone");
    let result = document.getElementById("result");

    // verifing name
    if(pattern.username.test(name.value)){
        errname.textContent="";
    }
    else{
        errname.textContent="Atleast 8 to 15 Character Required";
        name.focus();
        return false;
    }

    //verifing address
    if(address.value==""){
        erraddress.textContent="Address cannot be empty. Kindly fill ";
        address.focus();
        return false;
    }
    else{
        erraddress.textContent="";
    }

    //verifing  email
    if(email.value==""){
        erremail.textContent="Email cannot be empty. Kindly fill ";
        email.focus();
        return false;
    }
    else if(pattern.email.test(email.value)){
        erremail.textContent="";
    }
    else{
        erremail.textContent="Enter a vaild Email";
        email.focus();
        return false;
    }

    //verifing password
    if(password.value==""){
        errpassword.textContent="Kindly fill the Password";
        password.focus();
        return false;
    }
    else if(pattern.password.test(password.value)){
        errpassword.textContent="";
    }
    else{
        errpassword.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any Symbols";
        password.focus();
        return false;
    }

    // confirm password
    if(cpassword.value==""){
        errcpassword.textContent="Kindly confirm your password";
        cpassword.focus();
        return false;
    }
    else if(cpassword.value==password.value){
        errcpassword.textContent="";
    }else{
        errcpassword.textContent="Password and confirm password must be same";
        cpassword.focus();
        return false;
    }
    //verifing number
    if(phone.value==""){
        errphone.textContent="Kindly fill the phone number";
        phone.focus();
        return false;
    }
    else if(pattern.phone.test(phone.value)){
        errphone.textContent="";
        result.textContent="Regex validation Success";
        return false;
    }
    else{
        errphone.textContent="Enter a valid 10 digit number";
        phone.focus();
        return false;   
    }
}