import { sum } from "./calc";
import "./index.css";
import logo from "./logo.svg";
console.log(sum(5, 5));

const heading = document.getElementById("heading");
const h1 = document.createElement("h1");
h1.innerText = "Note Web Application";
h1.classList.add("redtext");
heading.appendChild(h1);

const logoTag = document.getElementById("logo");
const imgTag = document.createElement("img");
imgTag.src = logo;
logoTag.appendChild(imgTag);
