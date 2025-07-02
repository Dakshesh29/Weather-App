import * as dom from "./modules/dom.js";
import { getWeather } from "./modules/weather.js";
import "./styles.css";

window.addEventListener("DOMContentLoaded", async () => {
  const data = await getWeather("Gwalior");
  if (data) dom.displayWeatherToDOM(data);
});

const form = document.getElementById("searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  const data = await getWeather(city);
  if (data) dom.displayWeatherToDOM(data);
});
