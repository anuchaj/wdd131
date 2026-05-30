const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// static values from assignment
const temp = 10;
const wind = 5;

// wind chill function (ONE LINE as required)
function calculateWindChill(t, w) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
}

const windchillEl = document.querySelector("#windchill");

if (temp <= 10 && wind > 4.8) {
  windchillEl.textContent = calculateWindChill(temp, wind).toFixed(1) + "°C";
} else {
  windchillEl.textContent = "N/A";
}