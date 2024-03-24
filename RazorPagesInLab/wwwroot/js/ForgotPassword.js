function ForgotPasswordPageAlert(){
    let Email;
    Email = document.getElementById("Email");
    var eMail = Email.value;
    let message = "Email Address: " + eMail + "\nRecovery email sent!";
    alert(message);
  }