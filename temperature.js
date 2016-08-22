// passes js standard test: https://github.com/feross/standard
const Temperature = {
  toFahrenheit: (celsius) => {
    return celsius * (9 / 5) + 32
  },
  toCelsius: (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9)
  }
}

let tempToday = process.env.TEMP || 82
let tempInCelsius = Math.round(Temperature.toCelsius(tempToday))
let message = `Today’s temperature is ${tempToday}°F, which is ${tempInCelsius}°C.`
console.log(message)
