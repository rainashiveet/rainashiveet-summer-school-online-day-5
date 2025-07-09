# rainashiveet-summer-school-online-day-5
# 🌤️ Assignment 6: Chrome Extension – Check Weather from Current Location

## 🎯 Objective
Build a Chrome Extension that fetches and displays the current weather based on the user’s real-time location using a public weather API.

---

## 📦 What You Will Build
A Chrome extension popup that:
- Requests the user's current location using Geolocation API
- Sends coordinates to a public weather API (WeatherAPI.com)
- Displays:
  - 🌆 City name
  - 🌡️ Temperature (°C / °F toggle)
  - ⛅ Weather condition
  - 🖼️ Weather icon (based on condition)

---

## 🧠 Skills Practiced
- Chrome extension structure (Manifest V3)
- JavaScript DOM manipulation
- Geolocation API
- Fetching from public REST APIs
- Using `localStorage` for data persistence
- HTML and CSS styling

---

## 📁 Project Structure
weather-extension/
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── icons/
└── ico.jpg ← Custom extension icon

---

## 📝 Instructions

### 1️⃣ Setup `manifest.json`
- Uses Manifest V3
- Sets extension name, version, and description
- Required permissions:
  - `"geolocation"`
  - `"host_permissions"` for `https://api.weatherapi.com/`

### 2️⃣ Create `popup.html`
- Includes a title
- A button to fetch weather
- Section to show weather results
- Unit toggle (°C/°F)

### 3️⃣ Add Styling in `styles.css`
- Clean and minimal design
- Weather content is centered

### 4️⃣ Write `popup.js`
- Uses Geolocation API to get coordinates
- Fetches weather using [WeatherAPI.com](https://www.weatherapi.com/)
- Parses JSON and displays:
  - Location
  - Temperature
  - Condition text
  - Weather icon
- Stores last result in `localStorage`
- Shows a loader while fetching

---

## 🚀 How to Run

1. Go to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `weather-extension/` folder
5. Click your extension icon to test!

---

## 💡 API Key
This extension uses [WeatherAPI.com](https://www.weatherapi.com/).  
You need a free API key. Replace the API key in `popup.js`:

```js
const API_KEY = "your-api-key-here";

