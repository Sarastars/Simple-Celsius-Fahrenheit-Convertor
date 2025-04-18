   function convertTemp() {
        const celsius = parseFloat(document.getElementById('celsius').value);
        const resultEl = document.getElementById('result');
        const fahrenheitField = document.getElementById('fahrenheit');

        if (!isNaN(celsius)) {
          const fahrenheit = (celsius * 9 / 5) + 32;
          fahrenheitField.value = fahrenheit.toFixed(2);
          resultEl.textContent = `Result: ${fahrenheit.toFixed(2)} °F`;
        } else {
          resultEl.textContent = "Please enter a valid Celsius value.";
          fahrenheitField.value = '';
        }
      }

      function clearFields() {
        document.getElementById('celsius').value = '';
        document.getElementById('fahrenheit').value = '';
        document.getElementById('result').textContent = '';
      }
