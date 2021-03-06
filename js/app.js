window.addEventListener('load', function() {
  var loginBtn = document.getElementById('login-btn');
  var inputEmail = document.getElementById('input-email');
  var inputPassword = document.getElementById('input-password');
  var popEmail = document.getElementById('email-popover');
  var popPassword = document.getElementById('password-popover');
  var validateEmail = false;
  var validatePassword = false;
  var googleLogin = document.getElementById('login-google');

  loginBtn.addEventListener('click', function(event) {
    console.log('click');
    event.preventDefault();
    window.location.href = 'views/home.html';
  });

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
    } else {
      inactiveLoginBtn();
      popEmail.classList.remove('d-none');
    }
  });

  inputPassword.addEventListener('input', function() {
    var regexPassword = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    console.log(regexPassword.test(inputPassword.value));
    if (regexPassword.test(inputPassword.value)) {
      validatePassword = true;
      activeLoginBtn();
      popPassword.classList.add('d-none');
    } else {
      popPassword.classList.remove('d-none');
    }
  });

  // Inicializando Firebase
  var config = {
    apiKey: 'AIzaSyCoJOxjrwPRCbg65yUOL6u3tHkdjhO8nSY',
    authDomain: 'insta-collage-b53d7.firebaseapp.com',
    databaseURL: 'https://insta-collage-b53d7.firebaseio.com',
    projectId: 'insta-collage-b53d7',
    storageBucket: 'insta-collage-b53d7.appspot.com',
    messagingSenderId: '642859271142'
  };
  firebase.initializeApp(config);

  // Iniciando autentificación con Google
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  googleLogin.addEventListener('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).then(user => {
      window.location.href = 'views/home.html';
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  });
});

