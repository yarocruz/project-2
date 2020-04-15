// Signup

function signup() {
  const signupForm = document.querySelector("#signup-form");
  // get user info
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(credentials => {
    window.location.replace("/");
    console.log("account created!");
    console.log(credentials);
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
    window.location.replace("/");
    console.log("Signed in!");
    console.log(credentials);
  });
}

function logout() {
  auth()
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
