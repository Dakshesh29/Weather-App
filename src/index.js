import { getWeather } from "./modules/weather.js";
import { displayWeatherToDOM } from "./modules/dom.js";
import "./styles.css";

async function init() {
  const data = await getWeather("Agra");
  displayWeatherToDOM(data);
}

init();
