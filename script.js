let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("title").innerText = isLogin ? "Login" : "Register";
}

function submitForm() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!email || !pass) {
    error.innerText = "All fields required";
    return;
  }

  error.innerText = isLogin
    ? "Login successful (demo)"
    : "Registered successfully (demo)";
}
