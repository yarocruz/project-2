// Signup

function signup() {
  const signupForm = document.querySelector("#signup-form");
  // get user info
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const userName = signupForm.username.value;

  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(credentials => {
    window.location.replace("/");
    console.log("account created!");
    console.log(credentials.displayName);
    const user = firebase.auth().currentUser;
    user.updateProfile({ displayName: userName });
  });
}

// Signin
function login() {
  const loginForm = document.querySelector("#login-form");
  // get user info
  const email = loginForm.username.value;
  const password = loginForm.password.value;

  // sign in user

  auth.signInWithEmailAndPassword(email, password).then(credentials => {
    console.log("Signed in!");
    console.log(credentials);
    window.location.replace("/");
  });
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    // User is signed in.
    $("#signin")
      .removeClass("block")
      .addClass("hidden");
    $("#logout")
      .removeClass("hidden")
      .addClass("block");
    $("#user-name")
      .removeClass("hidden")
      .html(`Welcome&nbsp;${user.displayName}`);
    // ...
  } else {
    // User is signed out.
    // ...
    $("#signin")
      .removeClass("hidden")
      .addClass("block");
    $("#logout")
      .removeClass("block")
      .addClass("hidden");
    $("#user-name").addClass("hidden");
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Signed out!");
    })
    .catch(error => {
      console.log(error);
    });
}

console.log(login);
console.log(signup);
console.log(logout);
