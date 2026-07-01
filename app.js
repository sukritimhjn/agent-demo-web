const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("email-error");
  if (email === "") {
    error.textContent = "Email is required.";
    return;
  }
  if (!EMAIL_RE.test(email)) {
    error.textContent = "Enter a valid email address.";
    return;
  }
  error.textContent = "";
  console.log("submit", email);
});

async function loadItems() {
  const list = document.getElementById("items");
  list.innerHTML = "<li>Loading...</li>";
  const res = await fetch("http://localhost:3000/items?page=1");
  const data = await res.json();
  list.innerHTML = data.map((i) => `<li>${i.name}</li>`).join("");
}
loadItems();

// TODO: surface fetch errors to the user
