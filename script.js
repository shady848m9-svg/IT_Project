const wrapper = document.querySelector(".Wrapper");
const signupForm = document.getElementById("signup-form");

document.querySelector(".signupbtn").addEventListener("click", () => {
  wrapper.classList.add("active");
});

document.querySelector(".signinbtn").addEventListener("click", () => {
  wrapper.classList.remove("active");
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("regeuser").value;
  const pass = document.getElementById("regepass").value;

  localStorage.setItem("savedUser", user);
  localStorage.setItem("savedPass", pass);

  alert("Account created successfully!");
  wrapper.classList.remove("active");
});

function checklogin() {
  const inputUser = document.getElementById("loginemail").value;
  const inputPass = document.getElementById("loginpass").value;
  const storedUser = localStorage.getItem("savedUser");
  const storedPass = localStorage.getItem("savedPass");

  if (!storedUser) {
    alert("No account found! Please Sign Up first.");
    wrapper.classList.add("active");
    return;
  }

  if (inputUser === storedUser && inputPass === storedPass) {
    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Wrong username or password!");
  }
}
let darkmode = localStorage.getItem("darkmode");
const theme = document.getElementById("theme");
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};
if (darkmode === "active") enableDarkmode();

theme.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
