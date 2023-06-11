// Fire base config
const firebaseConfig = {
  apiKey: "AIzaSyDczcTSd0oOChheQzDcSjvZI16wtlZdZAM",
  authDomain: "authentication-f96fa.firebaseapp.com",
  projectId: "authentication-f96fa",
  storageBucket: "authentication-f96fa.appspot.com",
  messagingSenderId: "270155373750",
  appId: "1:270155373750:web:1f5ab8cbbd3278846e5a17"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        location.reload();
        console.log("user, user.email");
    })
    
    .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log("error code", errorCode);
     console.log("error message", errorMessage);
    });

});







//Signin Function
let signInButton = document.getElementById("signin");

signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signin click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        location.reload();
        var user = userCredential.user;
        console.log("user, user.mail");
        window.location = "home.html";
    })
    
    .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log("error code", errorCode);
     colesole.log("error message", errorMessage);
    });

});

//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
