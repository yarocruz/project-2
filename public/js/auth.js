auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("guides")
      .get()
      .then(snapshot => {
        setUpGuides(snapshot.docs);
        setupUi(user);
      });
  } else {
    setUpGuides([]);
    setupUi(null);
  }
});

// create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("guides")
    .add({
      title: createForm.title.value,
      content: createForm.content.value
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    });
});

// Signup
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(credentials => {
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    console.log(credentials);
  });
});

// Login
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // sign in user
  auth.signInWithEmailAndPassword(email, password).then(credentials => {
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    console.log(credentials);
  });
});

// Logout
const logout = document.querySelector("#logout");

logout.addEventListener("click", e => {
  e.preventDefault();

  // sign out user
  auth.signOut();
});
