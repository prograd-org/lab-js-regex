/* Fill your code*/
const pattern = {
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone:/^\d{10}$/,
}

function formValidate(){

    let name = document.forms["RegForm"]["Name"];
    let nameInput = document.getElementById("name");
    if(pattern.username.test(name.value)){
        nameInput.textContent="";
    }
    else{
        nameInput.textContent="Atleast 8 to 15 Character Required";
        name.focus();
        return false;
    }


    let address = document.forms["RegForm"]["Address"];
    let addressInput = document.getElementById("address");
    if(address.value==""){
        addressInput.textContent="Address cannot be empty. Kindly fill ";
        address.focus();
        return false;
    }
    else{
        addressInput.textContent="";
    }  


    let email = document.forms["RegForm"]["EMail"];
    let emailInput = document.getElementById("email");
    if(email.value==""){
        emailInput.textContent="Email cannot be empty. Kindly fill ";
        email.focus();
        return false;
    }
    else if(pattern.email.test(email.value)){
        emailInput.textContent="";
    }
    else{
        emailInput.textContent="Enter a vaild Email";
        email.focus();
        return false;
    }


    let password = document.forms["RegForm"]["Password"];
    let passwordInput = document.getElementById("pwd");
    if(password.value==""){
        passwordInput.textContent="Kindly fill the Password";
        password.focus();
        return false;
    }
    else if(pattern.password.test(password.value)){
        passwordInput.textContent="";
    }
    else{
        passwordInput.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any Symbols";
        password.focus();
        return false;
    }


    let cpassword = document.forms["RegForm"]["cPassword"];
    let cpasswordInput = document.getElementById("cpwd");
    if(cpassword.value==""){
        cpasswordInput.textContent="Kindly confirm your password";
        cpassword.focus();
        return false;
    }
    else if(cpassword.value==password.value){
        cpasswordInput.textContent="";
    }else{
        cpasswordInput.textContent="Password and confirm password must be same";
        cpassword.focus();
        return false;
    }


    let phone = document.forms["RegForm"]["phone"];
    let phoneInput = document.getElementById("phone");
    let result = document.getElementById("result");
    if(phone.value==""){
        phoneInput.textContent="Kindly fill the phone number";
        phone.focus();
        return false;
    }
    else if(pattern.phone.test(phone.value)){
        phoneInput.textContent="";
        result.textContent="Regex validation Success";
        return false;
    }
    else{
        phoneInputs.textContent="Enter a valid 10 digit number";
        phone.focus();
        return false;   
    }
} 
