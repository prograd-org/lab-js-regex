function formValidate(){
var name = document.forms["RegForm"]["Name"];
var address = document.forms["RegForm"]["Address"];
var email = document.forms["RegForm"]["EMail"];
var password = document.forms["RegForm"]["Password"];
var cpassword = document.forms["RegForm"]["cPassword"];
var phone= document.forms["RegForm"]["phone"];


errname = document.getElementById("name");
erraddress = document.getElementById("address");
erremail = document.getElementById('email');
errpassword = document.getElementById("pwd");
errcpassword = document.getElementById("cpwd");
errphone = document.getElementById("phone");

if (name.value.length<3){
    errname.innerText = "Name field should have atleast 8 to 15 Characteres";
    name.focus();
    return false;
}
    else {
        errname.innerText = "";
}

if (address.value == ""){
    erraddress.innerText = "Address field should not be Empty";
    address.focus();
    return false;
}
else {
    erraddress.innerText ="";
} 
if (email.value == ""){
    erremail.innerText = "Email should not be empty";
    email.focus();
    return false;
}
else if(/^[a-z0-9+_.-?&^"':]+@[a-z0-9.-]+$/i.test(email.value)){
    erremail.innerText = "";
} 
else {
    errname.innerText = "Email is invalid";
    email.focus();
    return false;
}

if (password.value == "")
{
    errpassword.innerText = "Password field should not be empty";
    password.focus();
    return false;
}
else if(password.value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
    errpassword.innerText = "";
}
else{
    errpassword.innerText = "Password should have minimum of 8 characters";
    password.focus();
    return false;
}
if (cpassword.value == "")
{
    errcpassword.innerText = "Password field should not be empty";
    cpassword.focus();
    return false;
}
else if(cpassword.value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) && cpassword.value === password.value){
    errcpassword.innerText = "";
}
else{
    errcpassword.innerText = "Password not match";
    cpassword.focus();
    return false;
}
if(phone.value == ""){
    errphone.innerText = "Kindly type your mobile number";
    phone.focus();
    return false;
}
else if (/^[0-9]{10}$/.test(phone.value)){
    errphone.innerText = "";
}
else{
    errphone.innerText = "Invalid Mobile Number";
    phone.focus();
    return false;
}


    
  }