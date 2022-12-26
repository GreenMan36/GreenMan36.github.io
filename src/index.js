import { greendown } from "./greendown/greendown.js";
import { mdHeaders } from "./greendown/plugins/mdHeaders.js";
import { example } from "./greendown/plugins/examplePlugin.js";
import { mdParagraph } from "./greendown/plugins/mdParagraphs.js";
import { mdLists } from "./greendown/plugins/mdLists.js";

// get elements
const output = document.getElementById("md-output");
const input = document.getElementById("md-input");

// fetch and render README.md
fetch("https://raw.githubusercontent.com/GreenMan36/GreenMan36.github.io/main/README.md").then((response) => {
  response.text().then((text) => {
    render(text);
  })
}).catch((err) => {
  console.error(err);
  render(`## GreenDown:
  Error while fetching README.md // ${err}`);
})

input.addEventListener("input", (e) => {
  render(e.target.value);
});

// render markdown
function render(text) {
  try {
    greendown.registerPlugin([mdHeaders, example, mdLists, mdParagraph]);
    output.innerHTML = greendown.parse(text);
  } catch (err) {
    console.error(err);
    output.innerHTML = `<h2>GreenDown:</h2>
    <p>Error while parsing // ${err}</p>`;
  }
  output.classList.remove("hidden");
  greendown.clearPlugins();
}


// theme switching
const themeDropdown = document.getElementById("theme-dropdown");
themeDropdown.addEventListener("change", (e) => {
  document.documentElement.removeAttribute("class");
  switch (e.target.value) {
    case "light":
      document.documentElement.classList.add("lightmode");
      localStorage.setItem("theme", "light");
      break;
    case "dark":
      document.documentElement.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
      break;
    case "snow":
      document.documentElement.classList.add("snowmode");
      localStorage.setItem("theme", "snow");
      break;
    case "highcontrast":
      document.documentElement.classList.add("highcontrast");
      localStorage.setItem("theme", "highcontrast");
      break;
    default:
      localStorage.removeItem("theme");
      break;
  }
});

// set theme on page load
switch (localStorage.getItem("theme")) {
  case "light":
    document.documentElement.classList.add("lightmode");
    themeDropdown.value = "light";
    break;
  case "dark":
    document.documentElement.classList.add("darkmode");
    themeDropdown.value = "dark";
    break;
  case "snow":
    document.documentElement.classList.add("snowmode");
    themeDropdown.value = "snow";
    break;
  case "highcontrast":
    document.documentElement.classList.add("highcontrast");
    themeDropdown.value = "highcontrast";
    break;
  default:
    document.documentElement.classList.remove("lightmode");
    document.documentElement.classList.remove("darkmode");
    themeDropdown.value = "default";
    break;
}
