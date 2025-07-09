const API_KEY = "97e4a96208024954873153102250807";
let isCelsius = true;

document.getElementById("getWeather").addEventListener("click", () => {
  getLocationWeather();
});

document.getElementById("unitToggle").addEventListener("change", (e) => {
  isCelsius = !e.target.checked;
  localStorage.setItem("unit", isCelsius ? "C" : "F");
  if (localStorage.getItem("lastData")) {
    displayWeather(JSON.parse(localStorage.getItem("lastData")));
  }
});

window.addEventListener("load", () => {
  const storedUnit = localStorage.getItem("unit");
  if (storedUnit === "F") {
    isCelsius = false;
    document.getElementById("unitToggle").checked = true;
  }
  const lastData = localStorage.getItem("lastData");
  if (lastData) {
    displayWeather(JSON.parse(lastData));
  }
});

function getLocationWeather() {
  document.getElementById("error").textContent = "";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      () => {
        document.getElementById("error").textContent =
          "Location access denied.";
      }
    );
  } else {
    document.getElementById("error").textContent =
      "Geolocation is not supported.";
  }
}

function fetchWeather(lat, lon) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("lastData", JSON.stringify(data));
      displayWeather(data);
    })
    .catch(() => {
      document.getElementById("error").textContent = "Failed to fetch weather.";
    });
}

function displayWeather(data) {
  const location = data.location.name + ", " + data.location.country;
  const condition = data.current.condition.text;
  const tempC = data.current.temp_c;
  const tempF = data.current.temp_f;
  const iconUrl = "https:" + data.current.condition.icon;

  document.getElementById("location").textContent = `📍 ${location}`;
  document.getElementById("temperature").textContent = isCelsius
    ? `🌡️ ${tempC} °C`
    : `🌡️ ${tempF} °F`;
  document.getElementById("condition").textContent = `⛅ ${condition}`;
  document.getElementById("icon").src = iconUrl;
}
