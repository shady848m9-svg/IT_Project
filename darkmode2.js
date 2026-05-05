const toggle = document.getElementById("darkToggle");
const icon = document.getElementById("darkIcon");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  icon.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});
