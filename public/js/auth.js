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
    console.log(user);
    user.updateProfile({ displayName: userName });

    // POSTING USER DATA TO DATABASE
    const userData = {
      email: user.email,
      password: user.uid,
      username: user.displayName
    };

    $.ajax("api/users", {
      method: "POST",
      data: userData
    }).then(response => {
      console.log(response);
      console.log("Created user data");
    });
    // POSTING USER DATA TO DATABASE
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
    $.ajax("api/users").then(response => {
      console.log(response);
      const loggedIn = response.filter(user => user.email === firebase.auth().currentUser.email);
      console.log(loggedIn);
      // User is signed in.
      $("#signin")
        .removeClass("block")
        .addClass("hidden");
      $("#logout")
        .removeClass("hidden")
        .addClass("block");
      $("#user-name")
        .removeClass("hidden")
        .html(`<span data-value="${loggedIn[0].id}">Welcome&nbsp;${user.displayName}</span>`);
      // ...
      console.log($("span").attr("data-value"));
    });
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
