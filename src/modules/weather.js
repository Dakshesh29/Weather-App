const apiKey = "d2dc3579bdb248bdab560351250207";

export const getWeather = async (city = "Gwalior") => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    console.log("Getting data...");
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    console.log(`📍 Location: ${data.location.name}`);
    console.log(`🌡 Temp: ${data.current.temp_c}°C`);
    console.log(`💨 Wind: ${data.current.wind_kph} km/h`);
    console.log(`💧 Humidity: ${data.current.humidity}%`);
    console.log(`🥵 Feels Like: ${data.current.feelslike_c}°C`);

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

// Optional helper function if needed elsewhere
export function hello2() {
  console.log("hello from weather");
}
