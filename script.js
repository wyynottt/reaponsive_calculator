function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (e) {
      document.getElementById('display').value = 'Error';
    }
  }
  