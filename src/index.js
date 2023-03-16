const darkMode = document.querySelector(".mode");
const body = document.body;

const changeDarkMode = () => {
  body.classList.toggle("dark");
  darkMode.textContent = (darkMode.textContent === "🌞") ? "🌒" : "🌞";
};

darkMode.addEventListener("click", changeDarkMode);
