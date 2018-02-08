window.addEventListener('load', function() {
  var loginBtn = document.getElementById('login-btn');
  var inputEmail = document.getElementById('input-email');
  var inputPassword = document.getElementById('input-password');
  var popEmail = document.getElementById('email-popover');
  var popPassword = document.getElementById('password-popover')
  var validateEmail = false;
  var validatePassword = false;

  function activeLoginBtn() {
    if (validateEmail && validatePassword) {
      loginBtn.removeAttribute('disabled');
    }
  }

  function inactiveLoginBtn() {
    loginBtn.hasAttribute('disabled', true);
  }

  inputEmail.addEventListener('input', function() {
    var regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(regexEmail.test(inputEmail.value));
    if (regexEmail.test(inputEmail.value)) {
      validateEmail = true;
      activeLoginBtn();
      popEmail.classList.add('d-none');
      // inputEmail.tooltip('hide');
    } else {
      inactiveLoginBtn();
      popEmail.classList.remove('d-none');
      // inputEmail.tooltip('show');
    }
  });

  inputPassword.addEventListener('input', function() {
    var regexPassword = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    console.log(regexPassword.test(inputPassword.value));
    if (regexPassword.test(inputPassword.value)) {
      validatePassword = true;
      activeLoginBtn();
      popPassword.classList.add('d-none');
      // inputPassword.tooltip('hide');
    } else {
      popPassword.classList.remove('d-none');
      // inputPassword.tooltip('show');
    }
  });
});

