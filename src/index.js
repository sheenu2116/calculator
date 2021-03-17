import { buttons } from "./utils/dom.elements";
import { buttonClick, keypressToButton } from "./controller/controller";
import "./styles/styles.css";

buttons.forEach(button => button.addEventListener(`click`, buttonClick))
window.addEventListener('keypress', keypressToButton)