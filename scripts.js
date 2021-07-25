const forms = document.forms;
const formOne = forms["form-1"];
const scrollUp = document.getElementById("scroll-up");
const toggleButton = document.getElementById("toggle-button");

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function onSubmit(e) {
  e.preventDefault();
  const name = e.target["name"].value;
  console.log(name);
}

formOne.addEventListener("submit", onSubmit);
