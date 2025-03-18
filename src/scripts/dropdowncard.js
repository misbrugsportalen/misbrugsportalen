// Hent knappen og tekstboksen
const toggleButton1 = document.getElementById("toggleButton1");
const extraContent1 = document.getElementById("extraContent1");
const toggleButton2 = document.getElementById("toggleButton2");
const extraContent2 = document.getElementById("extraContent2");
const toggleButton3 = document.getElementById("toggleButton3");
const extraContent3 = document.getElementById("extraContent3");

// Når knappen trykkes, toggler vi visningen af tekstboksen
toggleButton1.addEventListener("click", () => {
  extraContent1.classList.toggle("visible");
});

toggleButton2.addEventListener("click", () => {
  extraContent2.classList.toggle("visible");
});

toggleButton3.addEventListener("click", () => {
  extraContent3.classList.toggle("visible");
});
