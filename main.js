const cartCounter = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-to-cart");

let count = parseInt(localStorage.getItem("cartValue")) || 0;
cartCounter.innerText = count;

addButtons.forEach((button) => {
  button.onclick = () => {
    count++;
    cartCounter.innerText = count;
    localStorage.setItem("cartValue", count);
  };
});
const pages = [
  { name: "Sign In", url: "log_in.html" },
  { name: "Home", url: "index.html" },
  { name: "Makeup", url: "makeup.html" },
  { name: "Clothes", url: "clothes.html" },
  { name: "Skin Care", url: "skin.html" },
  { name: "Electronics", url: "electro.html" },
  { name: "Accessories", url: "accessories.html" },
  { name: "Contact Us", url: "contactus.html" },
];

const trigger = document.getElementById("searchTrigger");
const searchBox = document.getElementById("searchBox");
const input = document.getElementById("searchInput");
const dropdown = document.getElementById("searchDropdown");

trigger.addEventListener("click", function (e) {
  e.stopPropagation();
  const isOpen = searchBox.style.display === "block";
  searchBox.style.display = isOpen ? "none" : "block";
  if (!isOpen) input.focus();
});

input.addEventListener("input", function () {
  const val = this.value.trim().toLowerCase();
  dropdown.innerHTML = "";
  if (!val) return;

  const filtered = pages.filter((p) => p.name.toLowerCase().includes(val));

  if (filtered.length === 0) {
    dropdown.innerHTML = `<div class="no-result">No results found</div>`;
  } else {
    filtered.forEach((p) => {
      dropdown.innerHTML += `<a href="${p.url}">${p.name}</a>`;
    });
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-wrapper")) {
    searchBox.style.display = "none";
    input.value = "";
    dropdown.innerHTML = "";
  }
});
