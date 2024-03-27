function toggle() {
    var Form = document.getElementById("form");
    if (Form.style.display === "none") {
      Form.style.display = "block";
    } else {
      Form.style.display = "none";
    }
}

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
    // alert(message);


    const Paragraph = document.getElementById('DisplayForCreateAccountPage');
    Paragraph.style.display = 'block';
    Paragraph.textContent = "Username: " + Uname;
    const Paragraph2 = document.getElementById('DisplayForCreateAccountPage2');
    Paragraph2.style.display = 'block';
    Paragraph2.textContent = "Email Address: " + eMail; 
    const Paragraph3 = document.getElementById('DisplayForCreateAccountPage3');
    Paragraph3.style.display = 'block';
    Paragraph3.textContent = "Password: " + password;
    const Paragraph4 = document.getElementById('DisplayForCreateAccountPage4');
    Paragraph4.style.display = 'block';
    Paragraph4.textContent = "Password Confirm: " + passwordConfirm;
  }

  function ForgotPasswordPageAlert(){
    let Email;
    Email = document.getElementById("ForgotPageEmail");
    var eMail = Email.value;
    let message = "Email Address: " + eMail + "\nRecovery email sent!";
    // alert(message);

    const Paragraph = document.getElementById('DisplayForForgotPage');
    Paragraph.style.display = 'block';
    Paragraph.textContent = "Email Address: " + eMail;
    const Paragraph2 = document.getElementById('DisplayForForgotPage2');
    Paragraph2.style.display = 'block';
    Paragraph2.textContent = "Recovery email sent!";
  }

  function SignIn(){
    let uName; 
    uName = document.getElementById("uName");
    let Password; 
    Password = document.getElementById("Password");
    var Uname = uName.value;
    var password = Password.value;
    let message = "Username: " + Uname + "\nPassword: " + password;
    // alert(message);

    const Paragraph = document.getElementById('Display');
    Paragraph.style.display = 'block';
    Paragraph.textContent = "Username: " + Uname; 
    const Paragraph2 = document.getElementById('Display2');
    Paragraph2.style.display = 'block';
    Paragraph2.textContent = "Password: " + password;
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const calculateButton = document.querySelector('.btn-primary');
    calculateButton.addEventListener('click', function(e) {
      e.preventDefault();
      const firstNumber = parseFloat(document.getElementById('firstNumber').value);
      const secondNumber = parseFloat(document.getElementById('secondNumber').value);
      const sum = firstNumber + secondNumber;
      const resultParagraph = document.getElementById('resultParagraph');
      resultParagraph.style.display = 'block';
      resultParagraph.textContent = 'Result : ' + sum;
    });
  });