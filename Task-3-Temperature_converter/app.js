document.getElementById('unitSelect').addEventListener('change', function() {
    var option = this.querySelector('option[value=""][disabled]');
    if (option) {
        option.parentNode.removeChild(option);
    }
});

function convertTemperature() {
    let temperatureInput = document.getElementById('temperatureInput').value;
    let unitSelect = document.getElementById('unitSelect').value;
    let result = document.getElementById('result');

    if (!isNaN(temperatureInput)) {
        if (unitSelect === 'celsius') {
            let fahrenheit = (temperatureInput * 9 / 5) + 32;
            if (temperatureInput <= 10) {
                result.innerHTML = `${temperatureInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit. ❄️`;
            } else if (temperatureInput > 10 && temperatureInput <= 30) {
                result.innerHTML = `${temperatureInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit. 🌞`;
            } else {
                result.innerHTML = `${temperatureInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit. 🔥`;
            }
        } else {
            let celsius = (temperatureInput - 32) * 5 / 9;
            if (temperatureInput <= 50) {
                result.innerHTML = `${temperatureInput} Fahrenheit is ${celsius.toFixed(2)} Celsius. ❄️`;
            } else if (temperatureInput > 50 && temperatureInput <= 86) {
                result.innerHTML = `${temperatureInput} Fahrenheit is ${celsius.toFixed(2)} Celsius. 🌞`;
            } else {
                result.innerHTML = `${temperatureInput} Fahrenheit is ${celsius.toFixed(2)} Celsius. 🔥`;
            }
        }
    } else {
        alert("Enter numeric values only");
    }
}
