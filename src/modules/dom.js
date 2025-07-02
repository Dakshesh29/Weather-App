export function displayWeatherToDOM(data) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("forecast");

  if (data) {
    paragraph.innerText = `
📍 ${data.location.name}
🌡 Temp: ${data.current.temp_c}°C
💨 Wind: ${data.current.wind_kph} km/h
💧 Humidity: ${data.current.humidity}%
🥵 Feels Like: ${data.current.feelslike_c}°C
    `;
  } else {
    paragraph.innerText = "Failed to fetch weather data.";
  }

  const btn = document.createElement("button");
  btn.innerText = "click me";
  btn.addEventListener("click", () => {
    document.body.appendChild(paragraph);
  });
  document.body.appendChild(btn);
}
