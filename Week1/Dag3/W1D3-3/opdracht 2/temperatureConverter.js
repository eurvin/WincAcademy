function celsiusToFahrenheit(celcius) {
  let fahrenheit =  (celcius * 9) / 5 + 32;
  console.log(`${celcius}°C is ${fahrenheit}°F.`);
}

celsiusToFahrenheit(27);

function fahrenheitToCelsius(fahrenheit) {
  //Deduct 32, then multiply by 5, then divide by 9
  let celcius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F is ${celcius}°C.`);
}

fahrenheitToCelsius(80.6);
