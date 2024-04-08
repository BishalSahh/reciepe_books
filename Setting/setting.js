// let theme = document.getElementById("theme");
let darkRadio = document.getElementById("dark");
let lightRadio = document.getElementById("light");
let body = document.body;

// darkRadio.style.disabled = true;
// lightRadio.style.disabled = false;

// theme.addEventListener("click", function() {
//     // darkRadio.disabled = false;
//     // lightRadio.disabled = false;
// });

darkRadio.addEventListener("click", function () {
  // body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark-mode");
  // darkRadio.disabled = true;
  // lightRadio.disabled = false;
});

lightRadio.addEventListener("click", function () {
  body.classList.remove("dark-mode");
  localStorage.removeItem("theme");
  //localStorage.setItem('theam','light-mode')
  // body.classList.add("light-mode");
  // darkRadio.disabled = false;
  // lightRadio.disabled = true;
});

let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark-mode") {
  body.classList.add("dark-mode");
  darkRadio.checked = true;
} else {
  body.classList.add("light-mode");
  lightRadio.checked = true;
}
