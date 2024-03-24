$(document).ready(function () { 
  $("#btn").click(function () { 
    $("#form").toggle(); 
  }); 
}); 


function SignIn(){
  let uName; 
  uName = document.getElementById("uName");
  let Password; 
  Password = document.getElementById("Password");
  var Uname = uName.value;
  var password = Password.value;
  let message = "Username: " + Uname + "\nPassword: " + password;
  alert(message);
}