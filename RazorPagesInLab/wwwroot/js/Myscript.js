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
    alert(message);
  }

  function ForgotPasswordPageAlert(){
    let Email;
    Email = document.getElementById("Email");
    var eMail = Email.value;
    let message = "Email Address: " + eMail + "\nRecovery email sent!";
    alert(message);
  }

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

  document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.querySelector('.btn-secondary');
    toggleButton.addEventListener('click', function(e) {
      e.preventDefault();
      const elementsToToggle = document.querySelectorAll('.mb-4, .fw-normal, .form-floating, .btn-primary, .text-body-secondary');
      elementsToToggle.forEach(function(element) {
        if (element.style.display === 'none') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const calculateButton = document.querySelector('.btn-primary');
    calculateButton.addEventListener('click', function(e) {
      e.preventDefault();
      const firstNumber = parseFloat(document.getElementById('firstNumber').value);
      const secondNumber = parseFloat(document.getElementById('secondNumber').value);
      const sum = firstNumber + secondNumber;
      const resultParagraph = document.getElementById('resultParagraph');
      resultParagraph.style.display = 'block';
      resultParagraph.textContent = 'The sum is: ' + sum;
    });
  });