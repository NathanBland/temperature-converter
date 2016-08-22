// passes js standard test: https://github.com/feross/standard
export default {
  toFahrenheit: (celsius) => {
    return celsius * (9 / 5) + 32
  },
  toCelsius: (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9)
  }
}
