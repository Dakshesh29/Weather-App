export function displayWeatherToDOM(data) {
  const container = document.getElementById("weatherDisplay");
  container.style.display = "block"; // Make it visible if hidden

  container.innerHTML = `
    <h1>${data.location.name}</h1>
    <h2>${data.current.condition.text}</h2>
    <img class="weather-icon" src="https:${data.current.condition.icon}" alt="Weather icon" />
    <div class="temp">${data.current.temp_c}°C</div>
    <p>Feels like: ${data.current.feelslike_c}°C</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind: ${data.current.wind_kph} km/h</p>
  `;
}
