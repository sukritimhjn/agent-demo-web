// GAP (see issue): the login form submits even when email is empty.
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit", document.getElementById("email").value);
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
