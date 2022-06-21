/* Fill your code*/
/* Fill your code*/
function formValidate()
{
    var name = document.forms["RegForm"]["Name"];
    var address = document.forms["RegForm"]["Address"];
    var email = document.forms["RegForm"]["EMail"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["phone"];

    var errname = document.getElementById("name");
    var erraddress = document.getElementById("address");
    var erremail = document.getElementById("email");
    var errpass = document.getElementById("pwd");
    var errcpass = document.getElementById("cpwd");
    var errphone = document.getElementById("phone");



    if(name.value == "")
    {
        errname.innerText = "Atleast 8 to 15 characters required";
        name.focus();
        return false;
        
    }
    else{errname.innerText="";}
    if(address.value == "")
    {
        erraddress.innerText = "Kindly fill Address field";
        address.focus();
        return false;
    }
    else
    {
        erraddress.innerText="";
       
    }
    if(email.value == "")
    {
        erremail.innerText = "Kindly fill Email field";
        email.focus();
        return false;
    }
    else if(email.value.match(/[@._]/))
    {
        erremail.innerText = "";
       
    }
    else{
        erremail.innerText = "Enter a valid Email";
        email.focus();
        return false
    }
    if(password.value == "")
    {
        errpass.innerText = "Kindly fill password field";
        password.focus();
        return false;
    }
    else if(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/))
      {
          errpass.innerText="";
        
      }
      else{
        errpass.innerText = "Password must contain 1 uppercase letter , 1 lowercase letter, atleast 1 number any symbols";
        password.focus();
        return false;
      }
      if(cpassword.value == "")
    {
        errcpass.innerText = "Kindly fill password field";
        cpassword.focus();
        return false;
    }
    else if(cpass.value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
      ))
      {
          errcpass.innerText="";
          
      }
      else{
        errcpass.innerText = "Password must contain 1 uppercase letter , 1 lowercase letter, atleast 1 number any symbols";
        cpassword.focus();
        return false;
      }
      if(phone.value == "")
      {
          errphone.innerText = "Kindly fill Phone field";
      }
      else
      {
          errphone.innerText="";
         
      }
      return true;
    }
