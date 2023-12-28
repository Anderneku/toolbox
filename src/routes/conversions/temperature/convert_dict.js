export var from_celsius = {
    Celsius: ")",
    Farenheit: "* 1.8) + 32",
    Kelvin: "+ 273.15)",
    Rankine: "+ 273.15) * 1.8",
}
export var from_farenheit = {
    Celsius: "- 32) * (5 / 9)",
    Farenheit: ")",
    Kelvin: "- 32) / (1.8) + 273.15",
    Rankine: "+ 459.67)",
}
export var from_kelvin = {
    Celsius: "- 273.15)",
    Farenheit: "- 273) * (9 / 5) + 32",
    Kelvin: ")",
    Rankine: " * 1.8)",
}
export var from_rankine = {
    Celsius: "- 491.67) / 1.8",
    Farenheit: "- 459.67)",
    Kelvin: "/ 1.8)",
    Rankine: ")",
}