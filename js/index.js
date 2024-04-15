document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit');
  const cityInput = document.getElementById('city');
  const weatherDisplay = document.getElementById('weather');
  const weatherHumidity = document.getElementById("humidity")
  const weatherPressure = document.getElementById("pressure")

  submitBtn.addEventListener('click', function() {
    const city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33ef695a415b5d610739c2d026d492c9`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const tempK = data.main.temp;
        const humidity = data.main.humidity
        const pressure = data.main.pressure
        const tempC = (tempK - 273.15).toFixed(2);
        weatherDisplay.innerHTML = `The temperature in ${city} is ${tempC} °C`;
         weatherHumidity.innerHTML = `The humidity is ${humidity}`
         weatherPressure.innerHTML = `The pressure is ${pressure}`
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        weatherDisplay.innerHTML = 'Failed to retrieve weather data. Please try again.';
      });
  });
});