function SignUp(){
    let uName; 
    uName = document.getElementById("CreatePageUsername");
    let Email; 
    Email = document.getElementById("CreatePageEmail");
    let Password; 
    Password = document.getElementById("CreatePagePassword");
    let PasswordConfirm; 
    PasswordConfirm = document.getElementById("PasswordConfirm");
    var Uname = CreatePageUsername.value;
    var eMail = CreatePageEmail.value;
    var password = CreatePagePassword.value;
    var passwordConfirm = PasswordConfirm.value;
    let message = "Username: " + Uname + "\nEmail Address: " + eMail + "\nPassword: " + password + "\nPassword Confirm: " + passwordConfirm;
    alert(message);
  }