/* Fill your code*/
function  formValidate(){
    var name=document.forms["RegForm"]["Name"]
    var address=document.forms["RegForm"]["address"]
    var Email=document.forms["RegForm"]["Email"]
    var Password=document.forms["RegForm"]["Password"]
    var ConfirmPassword=document.forms["RegForm"]["ConfirmPassword"]
    var Phoneno=document.forms["RegForm"]["Phoneno"]
    
var errname=document.getElementById("name")
    var erraddress=document.getElementById("add")
    var errEmail=document.getElementById("email")
    var errpassword=document.getElementById("paswd")
    var errcpassword=document.getElementById("CPassword")
    var errPhoneno=document.getElementById("Phone")

    if(name.value.length<4){
        errname.innerText="Atleat 4 characters is required"
        name.focus();
        return false
    }
    else {
        errname.innerText="";
    }
    if(address.value==""){
        erraddress.innerText="Address field cannot be empty"
        address.focus();
        return false
    }
    else {
        erraddress.innerText="";
    }
    if(Email.value==""){
        errEmail.innerText="Email field cannot be empty"
        address.focus();
        return false
    }
    else if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9])+*$/.test(email)){

    errEmail.innerText="";
    }
    else {
        errEmail.innerText="Email is invalid"
        address.focus();
        return false
    }
    if(Password.value==""){
        errpassword.innerText="password field cannot be empty"
        Password.focus();
        return false
    }
    else if (Password.value.match(/^(?=.*[0-9])(?=.*[!@$%^&*])[a-zA-z0-9].{7,15}$/)){
        errpassword.innerText="";
    }
    else{
        errpassword.innerText="password is invalid"
        Password.focus();
        return false

    }
    if(ConfirmPassword.value==""){
        errcpassword.innerText="password field cannot be empty"
        ConfirmPassword.focus();
        return false
    }
    else if (ConfirmPassword.value.match(/^(?=.*[0-9])(?=.*[!@$%^&*])[a-zA-z0-9].{7,15}$/)){
        errcpassword.innerText="";
    }
    else{
        errcpassword.innerText="password is invalid"
        ConfirmPassword.focus();
        return false

    }
    if(Phoneno.value==""){
        errPhoneno.innerText="phone field cannot be empty"
        Phoneno.focus();
        return false
    }
    else{
        errPhoneno.innerText="";
    }
return true

}
