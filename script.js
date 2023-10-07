function toFahrenheit(celsius) {
 // Write your code here
	 if (celsius < -273.15 || celsius > 1.8e9) {
        return "Invalid input"; // Temperature out of range
    }

    // Convert Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;

    // Round the result to two decimal places
    return fahrenheit.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
